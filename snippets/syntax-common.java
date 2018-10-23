String result = "";

for (int i = 0; i < FlightPMs.size(); i++) {
  ProductManager p = FlightPMs.get(i);

  result += p.getName();

  if (i != FlightPMs.size() - 1) {
    result += ", ";
  }
}

System.out.println(result);