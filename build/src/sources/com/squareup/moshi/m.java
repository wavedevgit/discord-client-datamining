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
    int f17910d;

    /* renamed from: e  reason: collision with root package name */
    int[] f17911e;

    /* renamed from: i  reason: collision with root package name */
    String[] f17912i;

    /* renamed from: o  reason: collision with root package name */
    int[] f17913o;

    /* renamed from: p  reason: collision with root package name */
    boolean f17914p;

    /* renamed from: q  reason: collision with root package name */
    boolean f17915q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17916a;

        static {
            int[] iArr = new int[c.values().length];
            f17916a = iArr;
            try {
                iArr[c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17916a[c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17916a[c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f17916a[c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f17916a[c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f17916a[c.NULL.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final String[] f17917a;

        /* renamed from: b  reason: collision with root package name */
        final qu.a0 f17918b;

        private b(String[] strArr, qu.a0 a0Var) {
            this.f17917a = strArr;
            this.f17918b = a0Var;
        }

        public static b a(String... strArr) {
            try {
                ByteString[] byteStringArr = new ByteString[strArr.length];
                Buffer buffer = new Buffer();
                for (int i10 = 0; i10 < strArr.length; i10++) {
                    p.X1(buffer, strArr[i10]);
                    buffer.readByte();
                    byteStringArr[i10] = buffer.K1();
                }
                return new b((String[]) strArr.clone(), qu.a0.l(byteStringArr));
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
        this.f17911e = new int[32];
        this.f17912i = new String[32];
        this.f17913o = new int[32];
    }

    public static m p(BufferedSource bufferedSource) {
        return new o(bufferedSource);
    }

    public final void A(boolean z10) {
        this.f17914p = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void C(int i10) {
        int i11 = this.f17910d;
        int[] iArr = this.f17911e;
        if (i11 == iArr.length) {
            if (i11 != 256) {
                this.f17911e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f17912i;
                this.f17912i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f17913o;
                this.f17913o = Arrays.copyOf(iArr2, iArr2.length * 2);
            } else {
                throw new j("Nesting too deep at " + t());
            }
        }
        int[] iArr3 = this.f17911e;
        int i12 = this.f17910d;
        this.f17910d = i12 + 1;
        iArr3[i12] = i10;
    }

    public abstract void D();

    public abstract void E0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final k F0(String str) {
        throw new k(str + " at path " + t());
    }

    public final Object I() {
        switch (a.f17916a[s().ordinal()]) {
            case 1:
                ArrayList arrayList = new ArrayList();
                x();
                while (hasNext()) {
                    arrayList.add(I());
                }
                v();
                return arrayList;
            case 2:
                u uVar = new u();
                u();
                while (hasNext()) {
                    String o02 = o0();
                    Object I = I();
                    Object put = uVar.put(o02, I);
                    if (put != null) {
                        throw new j("Map key '" + o02 + "' has multiple values at path " + t() + ": " + put + " and " + I);
                    }
                }
                D();
                return uVar;
            case 3:
                return e1();
            case 4:
                return Double.valueOf(nextDouble());
            case 5:
                return Boolean.valueOf(k());
            case 6:
                return m();
            default:
                throw new IllegalStateException("Expected a value but was " + s() + " at path " + t());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final j I0(Object obj, Object obj2) {
        if (obj == null) {
            return new j("Expected " + obj2 + " but was null at path " + t());
        }
        return new j("Expected " + obj2 + " but was " + obj + ", a " + obj.getClass().getName() + ", at path " + t());
    }

    public abstract int J(b bVar);

    public abstract int P(b bVar);

    public abstract void S();

    public final void Y(boolean z10) {
        this.f17915q = z10;
    }

    public final boolean a() {
        return this.f17915q;
    }

    public abstract String e1();

    public final boolean g() {
        return this.f17914p;
    }

    public abstract boolean hasNext();

    public abstract boolean k();

    public abstract Object m();

    public abstract BufferedSource n();

    public abstract double nextDouble();

    public abstract int nextInt();

    public abstract long nextLong();

    public abstract String o0();

    public abstract c s();

    public final String t() {
        return n.a(this.f17910d, this.f17911e, this.f17912i, this.f17913o);
    }

    public abstract void u();

    public abstract void v();

    public abstract void x();

    public abstract m y();

    public abstract void z();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(m mVar) {
        this.f17910d = mVar.f17910d;
        this.f17911e = (int[]) mVar.f17911e.clone();
        this.f17912i = (String[]) mVar.f17912i.clone();
        this.f17913o = (int[]) mVar.f17913o.clone();
        this.f17914p = mVar.f17914p;
        this.f17915q = mVar.f17915q;
    }
}
