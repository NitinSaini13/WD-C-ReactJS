function Student({ id, name, marks, section }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-3 text-gray-700">{id}</td>
      <td className="px-4 py-3 font-medium text-gray-800">{name}</td>
      <td className="px-4 py-3 text-gray-700">{marks}</td>
      <td className="px-4 py-3 text-gray-700">{section}</td>
    </tr>
  );
}

export default Student;