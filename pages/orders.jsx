import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Orders() {
  let router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router.query]);

  return (
    <div>
      <h1 className="pt-10 pb-5 font-medium text-gray-600 body-font text-center text-3xl ">
        My Orders
      </h1>
      <div className="lg:w-2/3  sm:mx-10 md:mx-10 lg:mx-auto xl:mx-auto mx-5 overflow-auto border-2 border-gray-200 rounded-2xl my-10  shadow-2xl ">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium  text-gray-600 text-sm bg-pink-100 ">
                Plan
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-600  text-sm bg-pink-100">
                Speed
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-600 text-sm bg-pink-100">
                Storage
              </th>
              {/* <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-500 text-sm bg-gray-100">
                Price
              </th> */}
              {/* <th className="w-10 title-font tracking-wider font-medium text-pink-900 text-sm bg-pink-100 rounded-tr rounded-br"></th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-500 ">Start</td>
              <td className="px-4 py-3 text-sm text-gray-500 ">5 Mb/s</td>
              <td className="px-4 py-3 text-sm text-gray-500 ">15 GB</td>
              {/* <td className="px-4 py-3 text-lg text-pink-900">Free</td> */}
              {/* <td className="w-10 text-center">
                <input name="plan" type="radio" />
              </td> */}
            </tr>
            <tr>
              <td className="border-t-2 text-sm text-gray-500 border-gray-200 px-4 py-3">
                Pro
              </td>
              <td className="border-t-2 text-sm text-gray-500 border-gray-200 px-4 py-3">
                25 Mb/s
              </td>
              <td className="border-t-2 text-sm text-gray-500 border-gray-200 px-4 py-3">
                25 GB
              </td>
              {/* <td className="border-t-2 border-pink-200 px-4 py-3 text-lg text-pink-900"> */}
              {/* $24 */}
              {/* </td> */}
              {/* <td className="border-t-2 border-pink-200 w-10 text-center">
                <input name="plan" type="radio" />
              </td> */}
            </tr>
            <tr>
              <td className="border-t-2 text-sm text-gray-500 border-gray-200 px-4 py-3">
                Business
              </td>
              <td className="border-t-2 text-sm text-gray-500 border-gray-200 px-4 py-3">
                36 Mb/s
              </td>
              <td className="border-t-2 text-sm text-gray-500 border-gray-200 px-4 py-3">
                40 GB
              </td>
              {/* <td className="border-t-2 border-pink-200 px-4 py-3 text-lg text-pink-900">
                $50
              </td> */}
              {/* <td className="border-t-2 border-pink-200 w-10 text-center">
                <input name="plan" type="radio" />
              </td> */}
            </tr>
            <tr>
              <td className="border-t-2 text-sm font-medium text-gray-500   border-gray-200 px-4 py-3">
                Exclusive
              </td>
              <td className="border-t-2 text-sm font-medium text-gray-500  border-gray-200 px-4 py-3">
                48 Mb/s
              </td>
              <td className="border-t-2 text-sm font-medium text-gray-500  border-gray-200 px-4 py-3">
                120 GB
              </td>
              {/* <td className="border-t-2 border-b-2 border-pink-200 px-4 py-3 text-lg text-pink-900">
                $72
              </td> */}
              {/* <td className="border-t-2 border-b-2 border-pink-200 w-10 text-center">
                <input name="plan" type="radio" />
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
