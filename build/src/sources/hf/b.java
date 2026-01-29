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
        public a(java.lang.String r3, android.os.Parcel r4) {
            /*
                r2 = this;
                int r0 = r4.dataPosition()
                int r4 = r4.dataSize()
                java.lang.StringBuilder r1 = new java.lang.StringBuilder
                r1.<init>()
                r1.append(r3)
                java.lang.String r3 = " Parcel: pos="
                r1.append(r3)
                r1.append(r0)
                java.lang.String r3 = " size="
                r1.append(r3)
                r1.append(r4)
                java.lang.String r3 = r1.toString()
                r2.<init>(r3)
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
            throw new a("Size read is invalid start=" + dataPosition + " end=" + i10, parcel);
        }
        throw new a("Expected object header. Got 0x".concat(String.valueOf(Integer.toHexString(r10))), parcel);
    }

    private static void B(Parcel parcel, int i10, int i11, int i12) {
        if (i11 == i12) {
            return;
        }
        String hexString = Integer.toHexString(i11);
        throw new a("Expected size " + i12 + " got " + i11 + " (0x" + hexString + ")", parcel);
    }

    private static void C(Parcel parcel, int i10, int i11) {
        int y10 = y(parcel, i10);
        if (y10 == i11) {
            return;
        }
        String hexString = Integer.toHexString(y10);
        throw new a("Expected size " + i11 + " got " + y10 + " (0x" + hexString + ")", parcel);
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
        throw new a("Overread allowed size end=" + i10, parcel);
    }

    public static int l(int i10) {
        return (char) i10;
    }

    public static boolean m(Parcel parcel, int i10) {
        C(parcel, i10, 4);
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
        B(parcel, i10, y10, 4);
        if (parcel.readInt() != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        return Boolean.valueOf(z10);
    }

    public static double o(Parcel parcel, int i10) {
        C(parcel, i10, 8);
        return parcel.readDouble();
    }

    public static Double p(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        if (y10 == 0) {
            return null;
        }
        B(parcel, i10, y10, 8);
        return Double.valueOf(parcel.readDouble());
    }

    public static float q(Parcel parcel, int i10) {
        C(parcel, i10, 4);
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
        C(parcel, i10, 4);
        return parcel.readInt();
    }

    public static Integer u(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        if (y10 == 0) {
            return null;
        }
        B(parcel, i10, y10, 4);
        return Integer.valueOf(parcel.readInt());
    }

    public static long v(Parcel parcel, int i10) {
        C(parcel, i10, 8);
        return parcel.readLong();
    }

    public static Long w(Parcel parcel, int i10) {
        int y10 = y(parcel, i10);
        if (y10 == 0) {
            return null;
        }
        B(parcel, i10, y10, 8);
        return Long.valueOf(parcel.readLong());
    }

    public static short x(Parcel parcel, int i10) {
        C(parcel, i10, 4);
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
