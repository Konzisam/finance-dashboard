import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

import Boxheader from "../../components/Boxheader";
import DashboardBox from "../../components/DashboardBox";
import { useGetKpisQuery, useGetProductsQuery } from "../../state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import FlexBetween from "../../components/FlexBetween";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row2 = () => {
  const { palette } = useTheme();
  const { data: productsData } = useGetProductsQuery();
  const { data: operationalData } = useGetKpisQuery();
  const pieColors = [palette.primary[800], palette.primary[300]];
  {
    /* Get the expenses */
  }
  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);

  const productExpenseData = useMemo(() => {
    return (
      productsData &&
      productsData.map(
        ({ _id, price, expense }) => {
          return {
            id: _id,
            price: price,
            expense: expense
          };
        }
      )
    );
  }, [productsData]);

  // console.log("🚀 ~ Row2 ~ data:", data)
  return (
    <>
      <DashboardBox gridArea="d">
        {/* Line chart */}
        <Boxheader
          title="Operational vs Non-operational Expenses"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
              // domain={[8000, 23000]}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="e">
        <Boxheader title="Campaign and Targets" sideText="+8%"/>
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem" >
        <PieChart
          width={110}
          height={100}
          margin={{
            top: 0,
            right: -10,
            left: 10,
            bottom: 0,
          }}
          // onMouseEnter={this.onPieEnter}
        >
          <Pie
            stroke="none"
            data={pieData}
            innerRadius={18}
            outerRadius={38}
            // fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {pieData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>
        <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
          <Typography variant="h5">Target Sales</Typography>
          <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
            83
          </Typography>
          <Typography variant="h6"> Finance goals of the campaign that is desired</Typography>
        </Box>
        <Box flexBasis="40%">
          <Typography variant="h5">Losses in Revenue</Typography>
          <Typography variant="h6">
            Losses are down 35%
          </Typography>
          <Typography mt="0.4rem" variant="h5"> 
            Profit Margins
          </Typography>
          <Typography mt="0.4rem" variant="h6"> 
            Margins are up by 45% from last Month
          </Typography>
        </Box>
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="f">
      <Boxheader title="Product Prices vs Expenses" sideText="+8%" />
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 25,
            bottom: 40,
            left: -10,
          }}
        >
          <CartesianGrid stroke={palette.grey[800]} />
          <XAxis 
          type="number" 
          dataKey="price" 
          name="price" 
          axisLine={false}
          tickLine={false}
          style={{ fontSize: "10px" }}
          tickFormatter={(v) => `$${v}`}
          />
          <YAxis 
          type="number" 
          dataKey="expense" 
          name="expense" 
          axisLine={false}
          tickLine={false}
          style={{ fontSize: "10px" }}
          tickFormatter={(v) => `$${v}`}
          />
          <ZAxis type="number" range={[20]} />
          <Tooltip formatter={(v) => `$${v}`} />
          <Scatter 
          name="Product Expense Ratio" 
          data={productExpenseData} 
          fill={palette.tertiary[500]} />
        </ScatterChart>
      </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
