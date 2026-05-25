import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics() {

  const data = [
    {
      name: "Java",
      value: 90,
    },
    {
      name: "Spring",
      value: 80,
    },
    {
      name: "React",
      value: 75,
    },
    {
      name: "SQL",
      value: 70,
    },
  ];

  return (

    <div className="mt-10 bg-slate-800 p-6 rounded-xl">

      <h2 className="text-2xl font-bold mb-6">

        Skill Analytics

      </h2>

      <div style={{ width: "100%", height: 300 }}>

        <ResponsiveContainer>

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#06b6d4"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Analytics;