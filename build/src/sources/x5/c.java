package x5;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.Closeable;
import java.io.IOException;
import java.util.Arrays;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import ru.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c implements Closeable {

    /* renamed from: r  reason: collision with root package name */
    private static final String[] f54661r = new String[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];

    /* renamed from: d  reason: collision with root package name */
    int f54662d;

    /* renamed from: e  reason: collision with root package name */
    int[] f54663e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    String[] f54664i = new String[32];

    /* renamed from: o  reason: collision with root package name */
    int[] f54665o = new int[32];

    /* renamed from: p  reason: collision with root package name */
    boolean f54666p;

    /* renamed from: q  reason: collision with root package name */
    boolean f54667q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        final String[] f54668a;

        /* renamed from: b  reason: collision with root package name */
        final a0 f54669b;

        private a(String[] strArr, a0 a0Var) {
            this.f54668a = strArr;
            this.f54669b = a0Var;
        }

        public static a a(String... strArr) {
            try {
                ByteString[] byteStringArr = new ByteString[strArr.length];
                Buffer buffer = new Buffer();
                for (int i10 = 0; i10 < strArr.length; i10++) {
                    c.y(buffer, strArr[i10]);
                    buffer.readByte();
                    byteStringArr[i10] = buffer.I1();
                }
                return new a((String[]) strArr.clone(), a0.l(byteStringArr));
            } catch (IOException e10) {
                throw new AssertionError(e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        BEGIN_ARRAY,
        END_ARRAY,
        BEGIN_OBJECT,
        END_OBJECT,
        NAME,
        STRING,
        NUMBER,
        BOOLEAN,
        NULL,
        END_DOCUMENT
    }

    static {
        for (int i10 = 0; i10 <= 31; i10++) {
            f54661r[i10] = String.format("\\u%04x", Integer.valueOf(i10));
        }
        String[] strArr = f54661r;
        strArr[34] = "\\\"";
        strArr[92] = "\\\\";
        strArr[9] = "\\t";
        strArr[8] = "\\b";
        strArr[10] = "\\n";
        strArr[13] = "\\r";
        strArr[12] = "\\f";
    }

    public static c k(BufferedSource bufferedSource) {
        return new e(bufferedSource);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:16:0x002b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static void y(okio.BufferedSink r7, java.lang.String r8) {
        /*
            java.lang.String[] r0 = x5.c.f54661r
            r1 = 34
            r7.writeByte(r1)
            int r2 = r8.length()
            r3 = 0
            r4 = r3
        Ld:
            if (r3 >= r2) goto L36
            char r5 = r8.charAt(r3)
            r6 = 128(0x80, float:1.794E-43)
            if (r5 >= r6) goto L1c
            r5 = r0[r5]
            if (r5 != 0) goto L29
            goto L33
        L1c:
            r6 = 8232(0x2028, float:1.1535E-41)
            if (r5 != r6) goto L23
            java.lang.String r5 = "\\u2028"
            goto L29
        L23:
            r6 = 8233(0x2029, float:1.1537E-41)
            if (r5 != r6) goto L33
            java.lang.String r5 = "\\u2029"
        L29:
            if (r4 >= r3) goto L2e
            r7.x0(r8, r4, r3)
        L2e:
            r7.q0(r5)
            int r4 = r3 + 1
        L33:
            int r3 = r3 + 1
            goto Ld
        L36:
            if (r4 >= r2) goto L3b
            r7.x0(r8, r4, r2)
        L3b:
            r7.writeByte(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: x5.c.y(okio.BufferedSink, java.lang.String):void");
    }

    public abstract void D();

    public abstract void T();

    public abstract String b1();

    public abstract boolean g();

    public abstract boolean hasNext();

    public abstract b m();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void n(int i10) {
        int i11 = this.f54662d;
        int[] iArr = this.f54663e;
        if (i11 == iArr.length) {
            if (i11 != 256) {
                this.f54663e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f54664i;
                this.f54664i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f54665o;
                this.f54665o = Arrays.copyOf(iArr2, iArr2.length * 2);
            } else {
                throw new x5.a("Nesting too deep at " + t());
            }
        }
        int[] iArr3 = this.f54663e;
        int i12 = this.f54662d;
        this.f54662d = i12 + 1;
        iArr3[i12] = i10;
    }

    public abstract double nextDouble();

    public abstract int nextInt();

    public abstract String o0();

    public abstract int p(a aVar);

    public abstract void s();

    public final String t() {
        return d.a(this.f54662d, this.f54663e, this.f54664i, this.f54665o);
    }

    public abstract void u();

    public abstract void v();

    public abstract void x();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final x5.b z(String str) {
        throw new x5.b(str + " at path " + t());
    }
}
