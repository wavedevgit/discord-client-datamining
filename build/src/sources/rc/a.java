package rc;

import ne.w0;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a {
    public static byte[] a(byte[] bArr) {
        if (w0.f39060a >= 27) {
            return bArr;
        }
        return w0.s0(c(w0.E(bArr)));
    }

    public static byte[] b(byte[] bArr) {
        if (w0.f39060a >= 27) {
            return bArr;
        }
        try {
            JSONObject jSONObject = new JSONObject(w0.E(bArr));
            StringBuilder sb2 = new StringBuilder("{\"keys\":[");
            JSONArray jSONArray = jSONObject.getJSONArray("keys");
            for (int i10 = 0; i10 < jSONArray.length(); i10++) {
                if (i10 != 0) {
                    sb2.append(",");
                }
                JSONObject jSONObject2 = jSONArray.getJSONObject(i10);
                sb2.append("{\"k\":\"");
                sb2.append(d(jSONObject2.getString("k")));
                sb2.append("\",\"kid\":\"");
                sb2.append(d(jSONObject2.getString("kid")));
                sb2.append("\",\"kty\":\"");
                sb2.append(jSONObject2.getString("kty"));
                sb2.append("\"}");
            }
            sb2.append("]}");
            return w0.s0(sb2.toString());
        } catch (JSONException e10) {
            ne.y.d("ClearKeyUtil", "Failed to adjust response data: " + w0.E(bArr), e10);
            return bArr;
        }
    }

    private static String c(String str) {
        return str.replace('+', '-').replace('/', '_');
    }

    private static String d(String str) {
        return str.replace('-', '+').replace('_', '/');
    }
}
