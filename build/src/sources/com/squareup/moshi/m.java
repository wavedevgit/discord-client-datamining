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
    int f18800d;

    /* renamed from: e  reason: collision with root package name */
    int[] f18801e;

    /* renamed from: i  reason: collision with root package name */
    String[] f18802i;

    /* renamed from: o  reason: collision with root package name */
    int[] f18803o;

    /* renamed from: p  reason: collision with root package name */
    boolean f18804p;

    /* renamed from: q  reason: collision with root package name */
    boolean f18805q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f18806a;

        static {
            int[] iArr = new int[c.values().length];
            f18806a = iArr;
            try {
                iArr[c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f18806a[c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f18806a[c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f18806a[c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f18806a[c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f18806a[c.NULL.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final String[] f18807a;

        /* renamed from: b  reason: collision with root package name */
        final av.a0 f18808b;

        private b(String[] strArr, av.a0 a0Var) {
            this.f18807a = strArr;
            this.f18808b = a0Var;
        }

        public static b a(String... strArr) {
            try {
                ByteString[] byteStringArr = new ByteString[strArr.length];
                Buffer buffer = new Buffer();
                for (int i10 = 0; i10 < strArr.length; i10++) {
                    p.z1(buffer, strArr[i10]);
                    buffer.readByte();
                    byteStringArr[i10] = buffer.M1();
                }
                return new b((String[]) strArr.clone(), av.a0.l(byteStringArr));
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
        this.f18801e = new int[32];
        this.f18802i = new String[32];
        this.f18803o = new int[32];
    }

    public static m p(BufferedSource bufferedSource) {
        return new o(bufferedSource);
    }

    public final void A(boolean z10) {
        this.f18804p = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void C(int i10) {
        int i11 = this.f18800d;
        int[] iArr = this.f18801e;
        if (i11 == iArr.length) {
            if (i11 != 256) {
                this.f18801e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f18802i;
                this.f18802i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f18803o;
                this.f18803o = Arrays.copyOf(iArr2, iArr2.length * 2);
            } else {
                throw new j("Nesting too deep at " + t());
            }
        }
        int[] iArr3 = this.f18801e;
        int i12 = this.f18800d;
        this.f18800d = i12 + 1;
        iArr3[i12] = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final k C0(String str) {
        throw new k(str + " at path " + t());
    }

    public abstract void D();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final j E0(Object obj, Object obj2) {
        if (obj == null) {
            return new j("Expected " + obj2 + " but was null at path " + t());
        }
        return new j("Expected " + obj2 + " but was " + obj + ", a " + obj.getClass().getName() + ", at path " + t());
    }

    public final Object I() {
        switch (a.f18806a[s().ordinal()]) {
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
                return g1();
            case 4:
                return Double.valueOf(nextDouble());
            case 5:
                return Boolean.valueOf(i());
            case 6:
                return m();
            default:
                throw new IllegalStateException("Expected a value but was " + s() + " at path " + t());
        }
    }

    public abstract int J(b bVar);

    public abstract int Q(b bVar);

    public abstract void T();

    public final void Z(boolean z10) {
        this.f18805q = z10;
    }

    public final boolean a() {
        return this.f18805q;
    }

    public abstract String g1();

    public final boolean h() {
        return this.f18804p;
    }

    public abstract boolean hasNext();

    public abstract boolean i();

    public abstract Object m();

    public abstract BufferedSource n();

    public abstract double nextDouble();

    public abstract int nextInt();

    public abstract long nextLong();

    public abstract String o0();

    public abstract c s();

    public final String t() {
        return n.a(this.f18800d, this.f18801e, this.f18802i, this.f18803o);
    }

    public abstract void u();

    public abstract void v();

    public abstract void x();

    public abstract m y();

    public abstract void z();

    public abstract void z0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(m mVar) {
        this.f18800d = mVar.f18800d;
        this.f18801e = (int[]) mVar.f18801e.clone();
        this.f18802i = (String[]) mVar.f18802i.clone();
        this.f18803o = (int[]) mVar.f18803o.clone();
        this.f18804p = mVar.f18804p;
        this.f18805q = mVar.f18805q;
    }
}
