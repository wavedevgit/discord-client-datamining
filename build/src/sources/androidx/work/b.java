package androidx.work;

import android.util.Log;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import k4.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    private static final String f5622b = m.i("Data");

    /* renamed from: c  reason: collision with root package name */
    public static final b f5623c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    Map f5624a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private Map f5625a = new HashMap();

        public b a() {
            b bVar = new b(this.f5625a);
            b.o(bVar);
            return bVar;
        }

        public a b(String str, Object obj) {
            if (obj == null) {
                this.f5625a.put(str, null);
                return this;
            }
            Class<?> cls = obj.getClass();
            if (cls != Boolean.class && cls != Byte.class && cls != Integer.class && cls != Long.class && cls != Float.class && cls != Double.class && cls != String.class && cls != Boolean[].class && cls != Byte[].class && cls != Integer[].class && cls != Long[].class && cls != Float[].class && cls != Double[].class && cls != String[].class) {
                if (cls == boolean[].class) {
                    this.f5625a.put(str, b.a((boolean[]) obj));
                    return this;
                } else if (cls == byte[].class) {
                    this.f5625a.put(str, b.b((byte[]) obj));
                    return this;
                } else if (cls == int[].class) {
                    this.f5625a.put(str, b.e((int[]) obj));
                    return this;
                } else if (cls == long[].class) {
                    this.f5625a.put(str, b.f((long[]) obj));
                    return this;
                } else if (cls == float[].class) {
                    this.f5625a.put(str, b.d((float[]) obj));
                    return this;
                } else if (cls == double[].class) {
                    this.f5625a.put(str, b.c((double[]) obj));
                    return this;
                } else {
                    throw new IllegalArgumentException("Key " + str + " has invalid type " + cls);
                }
            }
            this.f5625a.put(str, obj);
            return this;
        }

        public a c(b bVar) {
            d(bVar.f5624a);
            return this;
        }

        public a d(Map map) {
            for (Map.Entry entry : map.entrySet()) {
                b((String) entry.getKey(), entry.getValue());
            }
            return this;
        }

        public a e(String str, boolean z10) {
            this.f5625a.put(str, Boolean.valueOf(z10));
            return this;
        }

        public a f(String str, int i10) {
            this.f5625a.put(str, Integer.valueOf(i10));
            return this;
        }

        public a g(String str, long j10) {
            this.f5625a.put(str, Long.valueOf(j10));
            return this;
        }

        public a h(String str, String str2) {
            this.f5625a.put(str, str2);
            return this;
        }

        public a i(String str, String[] strArr) {
            this.f5625a.put(str, strArr);
            return this;
        }
    }

    public b(b bVar) {
        this.f5624a = new HashMap(bVar.f5624a);
    }

    public static Boolean[] a(boolean[] zArr) {
        Boolean[] boolArr = new Boolean[zArr.length];
        for (int i10 = 0; i10 < zArr.length; i10++) {
            boolArr[i10] = Boolean.valueOf(zArr[i10]);
        }
        return boolArr;
    }

    public static Byte[] b(byte[] bArr) {
        Byte[] bArr2 = new Byte[bArr.length];
        for (int i10 = 0; i10 < bArr.length; i10++) {
            bArr2[i10] = Byte.valueOf(bArr[i10]);
        }
        return bArr2;
    }

    public static Double[] c(double[] dArr) {
        Double[] dArr2 = new Double[dArr.length];
        for (int i10 = 0; i10 < dArr.length; i10++) {
            dArr2[i10] = Double.valueOf(dArr[i10]);
        }
        return dArr2;
    }

    public static Float[] d(float[] fArr) {
        Float[] fArr2 = new Float[fArr.length];
        for (int i10 = 0; i10 < fArr.length; i10++) {
            fArr2[i10] = Float.valueOf(fArr[i10]);
        }
        return fArr2;
    }

    public static Integer[] e(int[] iArr) {
        Integer[] numArr = new Integer[iArr.length];
        for (int i10 = 0; i10 < iArr.length; i10++) {
            numArr[i10] = Integer.valueOf(iArr[i10]);
        }
        return numArr;
    }

    public static Long[] f(long[] jArr) {
        Long[] lArr = new Long[jArr.length];
        for (int i10 = 0; i10 < jArr.length; i10++) {
            lArr[i10] = Long.valueOf(jArr[i10]);
        }
        return lArr;
    }

    /* JADX WARN: Code restructure failed: missing block: B:31:0x0056, code lost:
        if (r3 != null) goto L12;
     */
    /* JADX WARN: Removed duplicated region for block: B:47:0x0061 A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static androidx.work.b g(byte[] r7) {
        /*
            java.lang.String r0 = "Error in Data#fromByteArray: "
            int r1 = r7.length
            r2 = 10240(0x2800, float:1.4349E-41)
            if (r1 > r2) goto L76
            java.util.HashMap r1 = new java.util.HashMap
            r1.<init>()
            java.io.ByteArrayInputStream r2 = new java.io.ByteArrayInputStream
            r2.<init>(r7)
            r7 = 0
            java.io.ObjectInputStream r3 = new java.io.ObjectInputStream     // Catch: java.lang.Throwable -> L46 java.lang.ClassNotFoundException -> L4a java.io.IOException -> L4f
            r3.<init>(r2)     // Catch: java.lang.Throwable -> L46 java.lang.ClassNotFoundException -> L4a java.io.IOException -> L4f
            int r7 = r3.readInt()     // Catch: java.lang.Throwable -> L2b java.lang.ClassNotFoundException -> L2d java.io.IOException -> L2f
        L1b:
            if (r7 <= 0) goto L31
            java.lang.String r4 = r3.readUTF()     // Catch: java.lang.Throwable -> L2b java.lang.ClassNotFoundException -> L2d java.io.IOException -> L2f
            java.lang.Object r5 = r3.readObject()     // Catch: java.lang.Throwable -> L2b java.lang.ClassNotFoundException -> L2d java.io.IOException -> L2f
            r1.put(r4, r5)     // Catch: java.lang.Throwable -> L2b java.lang.ClassNotFoundException -> L2d java.io.IOException -> L2f
            int r7 = r7 + (-1)
            goto L1b
        L2b:
            r7 = move-exception
            goto L5f
        L2d:
            r7 = move-exception
            goto L51
        L2f:
            r7 = move-exception
            goto L51
        L31:
            r3.close()     // Catch: java.io.IOException -> L35
            goto L3b
        L35:
            r7 = move-exception
            java.lang.String r3 = androidx.work.b.f5622b
            android.util.Log.e(r3, r0, r7)
        L3b:
            r2.close()     // Catch: java.io.IOException -> L3f
            goto L59
        L3f:
            r7 = move-exception
            java.lang.String r2 = androidx.work.b.f5622b
            android.util.Log.e(r2, r0, r7)
            goto L59
        L46:
            r1 = move-exception
            r3 = r7
            r7 = r1
            goto L5f
        L4a:
            r3 = move-exception
        L4b:
            r6 = r3
            r3 = r7
            r7 = r6
            goto L51
        L4f:
            r3 = move-exception
            goto L4b
        L51:
            java.lang.String r4 = androidx.work.b.f5622b     // Catch: java.lang.Throwable -> L2b
            android.util.Log.e(r4, r0, r7)     // Catch: java.lang.Throwable -> L2b
            if (r3 == 0) goto L3b
            goto L31
        L59:
            androidx.work.b r7 = new androidx.work.b
            r7.<init>(r1)
            return r7
        L5f:
            if (r3 == 0) goto L6b
            r3.close()     // Catch: java.io.IOException -> L65
            goto L6b
        L65:
            r1 = move-exception
            java.lang.String r3 = androidx.work.b.f5622b
            android.util.Log.e(r3, r0, r1)
        L6b:
            r2.close()     // Catch: java.io.IOException -> L6f
            goto L75
        L6f:
            r1 = move-exception
            java.lang.String r2 = androidx.work.b.f5622b
            android.util.Log.e(r2, r0, r1)
        L75:
            throw r7
        L76:
            java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
            java.lang.String r0 = "Data cannot occupy more than 10240 bytes when serialized"
            r7.<init>(r0)
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.work.b.g(byte[]):androidx.work.b");
    }

    public static byte[] o(b bVar) {
        ObjectOutputStream objectOutputStream;
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ObjectOutputStream objectOutputStream2 = null;
        try {
            try {
                objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
            } catch (Throwable th2) {
                th = th2;
            }
        } catch (IOException e10) {
            e = e10;
        }
        try {
            objectOutputStream.writeInt(bVar.n());
            for (Map.Entry entry : bVar.f5624a.entrySet()) {
                objectOutputStream.writeUTF((String) entry.getKey());
                objectOutputStream.writeObject(entry.getValue());
            }
            try {
                objectOutputStream.close();
            } catch (IOException e11) {
                Log.e(f5622b, "Error in Data#toByteArray: ", e11);
            }
            try {
                byteArrayOutputStream.close();
            } catch (IOException e12) {
                Log.e(f5622b, "Error in Data#toByteArray: ", e12);
            }
            if (byteArrayOutputStream.size() <= 10240) {
                return byteArrayOutputStream.toByteArray();
            }
            throw new IllegalStateException("Data cannot occupy more than 10240 bytes when serialized");
        } catch (IOException e13) {
            e = e13;
            objectOutputStream2 = objectOutputStream;
            Log.e(f5622b, "Error in Data#toByteArray: ", e);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            if (objectOutputStream2 != null) {
                try {
                    objectOutputStream2.close();
                } catch (IOException e14) {
                    Log.e(f5622b, "Error in Data#toByteArray: ", e14);
                }
            }
            try {
                byteArrayOutputStream.close();
            } catch (IOException e15) {
                Log.e(f5622b, "Error in Data#toByteArray: ", e15);
            }
            return byteArray;
        } catch (Throwable th3) {
            th = th3;
            objectOutputStream2 = objectOutputStream;
            if (objectOutputStream2 != null) {
                try {
                    objectOutputStream2.close();
                } catch (IOException e16) {
                    Log.e(f5622b, "Error in Data#toByteArray: ", e16);
                }
            }
            try {
                byteArrayOutputStream.close();
            } catch (IOException e17) {
                Log.e(f5622b, "Error in Data#toByteArray: ", e17);
            }
            throw th;
        }
    }

    public boolean equals(Object obj) {
        boolean z10;
        if (this == obj) {
            return true;
        }
        if (obj == null || b.class != obj.getClass()) {
            return false;
        }
        b bVar = (b) obj;
        Set<String> keySet = this.f5624a.keySet();
        if (!keySet.equals(bVar.f5624a.keySet())) {
            return false;
        }
        for (String str : keySet) {
            Object obj2 = this.f5624a.get(str);
            Object obj3 = bVar.f5624a.get(str);
            if (obj2 != null && obj3 != null) {
                if ((obj2 instanceof Object[]) && (obj3 instanceof Object[])) {
                    z10 = Arrays.deepEquals((Object[]) obj2, (Object[]) obj3);
                    continue;
                } else {
                    z10 = obj2.equals(obj3);
                    continue;
                }
            } else if (obj2 == obj3) {
                z10 = true;
                continue;
            } else {
                z10 = false;
                continue;
            }
            if (!z10) {
                return false;
            }
        }
        return true;
    }

    public boolean h(String str, boolean z10) {
        Object obj = this.f5624a.get(str);
        if (obj instanceof Boolean) {
            return ((Boolean) obj).booleanValue();
        }
        return z10;
    }

    public int hashCode() {
        return this.f5624a.hashCode() * 31;
    }

    public int i(String str, int i10) {
        Object obj = this.f5624a.get(str);
        if (obj instanceof Integer) {
            return ((Integer) obj).intValue();
        }
        return i10;
    }

    public Map j() {
        return Collections.unmodifiableMap(this.f5624a);
    }

    public long k(String str, long j10) {
        Object obj = this.f5624a.get(str);
        if (obj instanceof Long) {
            return ((Long) obj).longValue();
        }
        return j10;
    }

    public String l(String str) {
        Object obj = this.f5624a.get(str);
        if (obj instanceof String) {
            return (String) obj;
        }
        return null;
    }

    public String[] m(String str) {
        Object obj = this.f5624a.get(str);
        if (obj instanceof String[]) {
            return (String[]) obj;
        }
        return null;
    }

    public int n() {
        return this.f5624a.size();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder("Data {");
        if (!this.f5624a.isEmpty()) {
            for (String str : this.f5624a.keySet()) {
                sb2.append(str);
                sb2.append(" : ");
                Object obj = this.f5624a.get(str);
                if (obj instanceof Object[]) {
                    sb2.append(Arrays.toString((Object[]) obj));
                } else {
                    sb2.append(obj);
                }
                sb2.append(", ");
            }
        }
        sb2.append("}");
        return sb2.toString();
    }

    public b(Map map) {
        this.f5624a = new HashMap(map);
    }
}
