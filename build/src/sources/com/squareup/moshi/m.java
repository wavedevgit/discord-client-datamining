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
    int f18909d;

    /* renamed from: e  reason: collision with root package name */
    int[] f18910e;

    /* renamed from: i  reason: collision with root package name */
    String[] f18911i;

    /* renamed from: o  reason: collision with root package name */
    int[] f18912o;

    /* renamed from: p  reason: collision with root package name */
    boolean f18913p;

    /* renamed from: q  reason: collision with root package name */
    boolean f18914q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f18915a;

        static {
            int[] iArr = new int[c.values().length];
            f18915a = iArr;
            try {
                iArr[c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f18915a[c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f18915a[c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f18915a[c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f18915a[c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f18915a[c.NULL.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final String[] f18916a;

        /* renamed from: b  reason: collision with root package name */
        final iu.a0 f18917b;

        private b(String[] strArr, iu.a0 a0Var) {
            this.f18916a = strArr;
            this.f18917b = a0Var;
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
                return new b((String[]) strArr.clone(), iu.a0.k(byteStringArr));
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
        this.f18910e = new int[32];
        this.f18911i = new String[32];
        this.f18912o = new int[32];
    }

    public static m B(BufferedSource bufferedSource) {
        return new o(bufferedSource);
    }

    public abstract int A0(b bVar);

    public abstract int C0(b bVar);

    public final void D0(boolean z10) {
        this.f18914q = z10;
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
        int i11 = this.f18909d;
        int[] iArr = this.f18910e;
        if (i11 == iArr.length) {
            if (i11 != 256) {
                this.f18910e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f18911i;
                this.f18911i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f18912o;
                this.f18912o = Arrays.copyOf(iArr2, iArr2.length * 2);
            } else {
                throw new j("Nesting too deep at " + q());
            }
        }
        int[] iArr3 = this.f18910e;
        int i12 = this.f18909d;
        this.f18909d = i12 + 1;
        iArr3[i12] = i10;
    }

    public abstract void P();

    public final Object V() {
        switch (a.f18915a[E().ordinal()]) {
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
                return e1();
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
        return this.f18914q;
    }

    public abstract String e1();

    public final boolean h() {
        return this.f18913p;
    }

    public abstract boolean hasNext();

    public abstract boolean l();

    public abstract String l0();

    public abstract Object n();

    public abstract double nextDouble();

    public abstract int nextInt();

    public abstract long nextLong();

    public final String q() {
        return n.a(this.f18909d, this.f18910e, this.f18911i, this.f18912o);
    }

    public abstract void r();

    public abstract void s();

    public abstract void u();

    public final void v(boolean z10) {
        this.f18913p = z10;
    }

    public abstract BufferedSource x();

    public abstract void y();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(m mVar) {
        this.f18909d = mVar.f18909d;
        this.f18910e = (int[]) mVar.f18910e.clone();
        this.f18911i = (String[]) mVar.f18911i.clone();
        this.f18912o = (int[]) mVar.f18912o.clone();
        this.f18913p = mVar.f18913p;
        this.f18914q = mVar.f18914q;
    }
}
