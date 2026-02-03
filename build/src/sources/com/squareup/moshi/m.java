package com.squareup.moshi;

import java.io.Closeable;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    int f17524d;

    /* renamed from: e  reason: collision with root package name */
    int[] f17525e;

    /* renamed from: i  reason: collision with root package name */
    String[] f17526i;

    /* renamed from: o  reason: collision with root package name */
    int[] f17527o;

    /* renamed from: p  reason: collision with root package name */
    boolean f17528p;

    /* renamed from: q  reason: collision with root package name */
    boolean f17529q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17530a;

        static {
            int[] iArr = new int[c.values().length];
            f17530a = iArr;
            try {
                iArr[c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17530a[c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17530a[c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f17530a[c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f17530a[c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f17530a[c.NULL.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final String[] f17531a;

        /* renamed from: b  reason: collision with root package name */
        final lu.a0 f17532b;

        private b(String[] strArr, lu.a0 a0Var) {
            this.f17531a = strArr;
            this.f17532b = a0Var;
        }

        public static b a(String... strArr) {
            try {
                ByteString[] byteStringArr = new ByteString[strArr.length];
                Buffer buffer = new Buffer();
                for (int i10 = 0; i10 < strArr.length; i10++) {
                    p.Y1(buffer, strArr[i10]);
                    buffer.readByte();
                    byteStringArr[i10] = buffer.L1();
                }
                return new b((String[]) strArr.clone(), lu.a0.k(byteStringArr));
            } catch (IOException e10) {
                throw new AssertionError(e10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum c {
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public m() {
        this.f17525e = new int[32];
        this.f17526i = new String[32];
        this.f17527o = new int[32];
    }

    public static m B(BufferedSource bufferedSource) {
        return new o(bufferedSource);
    }

    public abstract int A0(b bVar);

    public abstract int C0(b bVar);

    public final void D0(boolean z10) {
        this.f17529q = z10;
    }

    public abstract c E();

    public abstract void E0();

    public abstract m F();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final k F0(String str) {
        throw new k(str + " at path " + q());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final j I0(Object obj, Object obj2) {
        if (obj == null) {
            return new j("Expected " + obj2 + " but was null at path " + q());
        }
        return new j("Expected " + obj2 + " but was " + obj + ", a " + obj.getClass().getName() + ", at path " + q());
    }

    public abstract void L();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(int i10) {
        int i11 = this.f17524d;
        int[] iArr = this.f17525e;
        if (i11 == iArr.length) {
            if (i11 != 256) {
                this.f17525e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f17526i;
                this.f17526i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f17527o;
                this.f17527o = Arrays.copyOf(iArr2, iArr2.length * 2);
            } else {
                throw new j("Nesting too deep at " + q());
            }
        }
        int[] iArr3 = this.f17525e;
        int i12 = this.f17524d;
        this.f17524d = i12 + 1;
        iArr3[i12] = i10;
    }

    public abstract void P();

    public final Object V() {
        switch (a.f17530a[E().ordinal()]) {
            case 1:
                ArrayList arrayList = new ArrayList();
                u();
                while (hasNext()) {
                    arrayList.add(V());
                }
                s();
                return arrayList;
            case 2:
                u uVar = new u();
                r();
                while (hasNext()) {
                    String l02 = l0();
                    Object V = V();
                    Object put = uVar.put(l02, V);
                    if (put != null) {
                        throw new j("Map key '" + l02 + "' has multiple values at path " + q() + ": " + put + " and " + V);
                    }
                }
                y();
                return uVar;
            case 3:
                return f1();
            case 4:
                return Double.valueOf(nextDouble());
            case 5:
                return Boolean.valueOf(l());
            case 6:
                return n();
            default:
                throw new IllegalStateException("Expected a value but was " + E() + " at path " + q());
        }
    }

    public final boolean a() {
        return this.f17529q;
    }

    public abstract String f1();

    public final boolean h() {
        return this.f17528p;
    }

    public abstract boolean hasNext();

    public abstract boolean l();

    public abstract String l0();

    public abstract Object n();

    public abstract double nextDouble();

    public abstract int nextInt();

    public abstract long nextLong();

    public final String q() {
        return n.a(this.f17524d, this.f17525e, this.f17526i, this.f17527o);
    }

    public abstract void r();

    public abstract void s();

    public abstract void u();

    public final void v(boolean z10) {
        this.f17528p = z10;
    }

    public abstract BufferedSource x();

    public abstract void y();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(m mVar) {
        this.f17524d = mVar.f17524d;
        this.f17525e = (int[]) mVar.f17525e.clone();
        this.f17526i = (String[]) mVar.f17526i.clone();
        this.f17527o = (int[]) mVar.f17527o.clone();
        this.f17528p = mVar.f17528p;
        this.f17529q = mVar.f17529q;
    }
}
