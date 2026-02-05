package hf;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends RuntimeException {
        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public a(java.lang.String r5, android.os.Parcel r6) {
            /*
                r4 = this;
                int r0 = r6.dataPosition()
                int r6 = r6.dataSize()
                java.lang.String r1 = java.lang.String.valueOf(r5)
                int r1 = r1.length()
                java.lang.String r2 = java.lang.String.valueOf(r0)
                int r2 = r2.length()
                java.lang.String r3 = java.lang.String.valueOf(r6)
                int r3 = r3.length()
                int r1 = r1 + 13
                int r1 = r1 + r2
                java.lang.StringBuilder r2 = new java.lang.StringBuilder
                int r1 = r1 + 6
                int r1 = r1 + r3
                r2.<init>(r1)
                r2.append(r5)
                java.lang.String r5 = " Parcel: pos="
                r2.append(r5)
                r2.append(r0)
                java.lang.String r5 = " size="
                r2.append(r5)
                r2.append(r6)
                java.lang.String r5 = r2.toString()
                r4.<init>(r5)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: hf.b.a.<init>(java.lang.String, android.os.Parcel):void");
        }
    }

    public static int A(Parcel parcel) {
        int r10 = r(parcel);
        int y10 = y(parcel, r10);
        int l10 = l(r10);
        int dataPosition = parcel.dataPosition();
        if (l10 == 20293) {
            int i10 = y10 + dataPosition;
            if (i10 >= dataPosition && i10 <= parcel.dataSize()) {
                return i10;
            }
            StringBuilder sb2 = new StringBuilder(String.valueOf(dataPosition).length() + 32 + String.valueOf(i10).length());
            sb2.append("Size read is invalid start=");
            sb2.append(dataPosition);
            sb2.append(" end=");
            sb2.append(i10);
            throw new a(sb2.toString(), parcel);
        }
        throw new a("Expected object header. Got 0x".concat(String.valueOf(Integer.toHexString(r10))), parcel);
    }

    private static void B(Parcel parcel, int i10, int i11) {
        int y10 = y(parcel, i10);
        if (y10 == i11) {
            return;
        }
        String hexString = Integer.toHexString(y10);
        int length = String.valueOf(i11).length();
        StringBuilder sb2 = new StringBuilder(length + 19 + String.valueOf(y10).length() + 4 + String.valueOf(hexString).length() + 1);
        sb2.append("Expected size ");
        sb2.append(i11);
        sb2.append(" got ");
        sb2.append(y10);
        sb2.append(" (0x");
        sb2.append(hexString);
        sb2.append(")");
        throw new a(sb2.toString(), parcel);
    }

    private static void C(Parcel parcel, int i10, int i11, int i12) {
        if (i11 == i12) {
            return;
        }
        String hexString = Integer.toHexString(i11);
        int length = String.valueOf(i12).length();
        StringBuilder sb2 = new StringBuilder(length + 19 + String.valueOf(i11).length() + 4 + String.valueOf(hexString).length() + 1);
        sb2.append("Expected size ");
        sb2.append(i12);
        sb2.append(" got ");
        sb2.append(i11);
        sb2.append(" (0x");
        sb2.append(hexString);
        sb2.append(")");
        throw new a(sb2.toString(), parcel);
    }

    public static Bundle a(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        Bundle readBundle = parcel.readBundle();
        parcel.setDataPosition(dataPosition + y10);
        return readBundle;
    }

    public static byte[] b(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        byte[] createByteArray = parcel.createByteArray();
        parcel.setDataPosition(dataPosition + y10);
        return createByteArray;
    }

    public static byte[][] c(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        int readInt = parcel.readInt();
        byte[][] bArr = new byte[readInt];
        for (int i11 = 0; i11 < readInt; i11++) {
            bArr[i11] = parcel.createByteArray();
        }
        parcel.setDataPosition(dataPosition + y10);
        return bArr;
    }

    public static int[] d(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        int[] createIntArray = parcel.createIntArray();
        parcel.setDataPosition(dataPosition + y10);
        return createIntArray;
    }

    public static Parcelable e(Parcel parcel, int i10, Parcelable.Creator creator) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        Parcelable parcelable = (Parcelable) creator.createFromParcel(parcel);
        parcel.setDataPosition(dataPosition + y10);
        return parcelable;
    }

    public static String f(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        String readString = parcel.readString();
        parcel.setDataPosition(dataPosition + y10);
        return readString;
    }

    public static String[] g(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        String[] createStringArray = parcel.createStringArray();
        parcel.setDataPosition(dataPosition + y10);
        return createStringArray;
    }

    public static ArrayList h(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        ArrayList<String> createStringArrayList = parcel.createStringArrayList();
        parcel.setDataPosition(dataPosition + y10);
        return createStringArrayList;
    }

    public static Object[] i(Parcel parcel, int i10, Parcelable.Creator creator) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        Object[] createTypedArray = parcel.createTypedArray(creator);
        parcel.setDataPosition(dataPosition + y10);
        return createTypedArray;
    }

    public static ArrayList j(Parcel parcel, int i10, Parcelable.Creator creator) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        ArrayList createTypedArrayList = parcel.createTypedArrayList(creator);
        parcel.setDataPosition(dataPosition + y10);
        return createTypedArrayList;
    }

    public static void k(Parcel parcel, int i10) {
        if (parcel.dataPosition() == i10) {
            return;
        }
        StringBuilder sb2 = new StringBuilder(String.valueOf(i10).length() + 26);
        sb2.append("Overread allowed size end=");
        sb2.append(i10);
        throw new a(sb2.toString(), parcel);
    }

    public static int l(int i10) {
        return (char) i10;
    }

    public static boolean m(Parcel parcel, int i10) {
        B(parcel, i10, 4);
        if (parcel.readInt() != 0) {
            return true;
        }
        return false;
    }

    public static Boolean n(Parcel parcel, int i10) {
        boolean z10;
        int y10 = y(parcel, i10);
        if (y10 == 0) {
            return null;
        }
        C(parcel, i10, y10, 4);
        if (parcel.readInt() != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        return Boolean.valueOf(z10);
    }

    public static double o(Parcel parcel, int i10) {
        B(parcel, i10, 8);
        return parcel.readDouble();
    }

    public static Double p(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        if (y10 == 0) {
            return null;
        }
        C(parcel, i10, y10, 8);
        return Double.valueOf(parcel.readDouble());
    }

    public static float q(Parcel parcel, int i10) {
        B(parcel, i10, 4);
        return parcel.readFloat();
    }

    public static int r(Parcel parcel) {
        return parcel.readInt();
    }

    public static IBinder s(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        int dataPosition = parcel.dataPosition();
        if (y10 == 0) {
            return null;
        }
        IBinder readStrongBinder = parcel.readStrongBinder();
        parcel.setDataPosition(dataPosition + y10);
        return readStrongBinder;
    }

    public static int t(Parcel parcel, int i10) {
        B(parcel, i10, 4);
        return parcel.readInt();
    }

    public static Integer u(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        if (y10 == 0) {
            return null;
        }
        C(parcel, i10, y10, 4);
        return Integer.valueOf(parcel.readInt());
    }

    public static long v(Parcel parcel, int i10) {
        B(parcel, i10, 8);
        return parcel.readLong();
    }

    public static Long w(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        if (y10 == 0) {
            return null;
        }
        C(parcel, i10, y10, 8);
        return Long.valueOf(parcel.readLong());
    }

    public static short x(Parcel parcel, int i10) {
        B(parcel, i10, 4);
        return (short) parcel.readInt();
    }

    public static int y(Parcel parcel, int i10) {
        if ((i10 & (-65536)) != -65536) {
            return (char) (i10 >> 16);
        }
        return parcel.readInt();
    }

    public static void z(Parcel parcel, int i10) {
        parcel.setDataPosition(parcel.dataPosition() + y(parcel, i10));
    }
}
