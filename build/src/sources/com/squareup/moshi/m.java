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
    int f18050d;

    /* renamed from: e  reason: collision with root package name */
    int[] f18051e;

    /* renamed from: i  reason: collision with root package name */
    String[] f18052i;

    /* renamed from: o  reason: collision with root package name */
    int[] f18053o;

    /* renamed from: p  reason: collision with root package name */
    boolean f18054p;

    /* renamed from: q  reason: collision with root package name */
    boolean f18055q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f18056a;

        static {
            int[] iArr = new int[c.values().length];
            f18056a = iArr;
            try {
                iArr[c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f18056a[c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f18056a[c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f18056a[c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f18056a[c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f18056a[c.NULL.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final String[] f18057a;

        /* renamed from: b  reason: collision with root package name */
        final ru.a0 f18058b;

        private b(String[] strArr, ru.a0 a0Var) {
            this.f18057a = strArr;
            this.f18058b = a0Var;
        }

        public static b a(String... strArr) {
            try {
                ByteString[] byteStringArr = new ByteString[strArr.length];
                Buffer buffer = new Buffer();
                for (int i10 = 0; i10 < strArr.length; i10++) {
                    p.W1(buffer, strArr[i10]);
                    buffer.readByte();
                    byteStringArr[i10] = buffer.I1();
                }
                return new b((String[]) strArr.clone(), ru.a0.l(byteStringArr));
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
        this.f18051e = new int[32];
        this.f18052i = new String[32];
        this.f18053o = new int[32];
    }

    public static m p(BufferedSource bufferedSource) {
        return new o(bufferedSource);
    }

    public final void A(boolean z10) {
        this.f18054p = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void C(int i10) {
        int i11 = this.f18050d;
        int[] iArr = this.f18051e;
        if (i11 == iArr.length) {
            if (i11 != 256) {
                this.f18051e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f18052i;
                this.f18052i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f18053o;
                this.f18053o = Arrays.copyOf(iArr2, iArr2.length * 2);
            } else {
                throw new j("Nesting too deep at " + t());
            }
        }
        int[] iArr3 = this.f18051e;
        int i12 = this.f18050d;
        this.f18050d = i12 + 1;
        iArr3[i12] = i10;
    }

    public abstract void C0();

    public abstract void D();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final k D0(String str) {
        throw new k(str + " at path " + t());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final j G0(Object obj, Object obj2) {
        if (obj == null) {
            return new j("Expected " + obj2 + " but was null at path " + t());
        }
        return new j("Expected " + obj2 + " but was " + obj + ", a " + obj.getClass().getName() + ", at path " + t());
    }

    public final Object I() {
        switch (a.f18056a[s().ordinal()]) {
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
                return b1();
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

    public abstract int J(b bVar);

    public abstract int Q(b bVar);

    public abstract void T();

    public final void Z(boolean z10) {
        this.f18055q = z10;
    }

    public final boolean a() {
        return this.f18055q;
    }

    public abstract String b1();

    public final boolean g() {
        return this.f18054p;
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
        return n.a(this.f18050d, this.f18051e, this.f18052i, this.f18053o);
    }

    public abstract void u();

    public abstract void v();

    public abstract void x();

    public abstract m y();

    public abstract void z();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(m mVar) {
        this.f18050d = mVar.f18050d;
        this.f18051e = (int[]) mVar.f18051e.clone();
        this.f18052i = (String[]) mVar.f18052i.clone();
        this.f18053o = (int[]) mVar.f18053o.clone();
        this.f18054p = mVar.f18054p;
        this.f18055q = mVar.f18055q;
    }
}
