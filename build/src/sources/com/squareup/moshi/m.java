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
    int f17930d;

    /* renamed from: e  reason: collision with root package name */
    int[] f17931e;

    /* renamed from: i  reason: collision with root package name */
    String[] f17932i;

    /* renamed from: o  reason: collision with root package name */
    int[] f17933o;

    /* renamed from: p  reason: collision with root package name */
    boolean f17934p;

    /* renamed from: q  reason: collision with root package name */
    boolean f17935q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17936a;

        static {
            int[] iArr = new int[c.values().length];
            f17936a = iArr;
            try {
                iArr[c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17936a[c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17936a[c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f17936a[c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f17936a[c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f17936a[c.NULL.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final String[] f17937a;

        /* renamed from: b  reason: collision with root package name */
        final ou.a0 f17938b;

        private b(String[] strArr, ou.a0 a0Var) {
            this.f17937a = strArr;
            this.f17938b = a0Var;
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
                return new b((String[]) strArr.clone(), ou.a0.l(byteStringArr));
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
        this.f17931e = new int[32];
        this.f17932i = new String[32];
        this.f17933o = new int[32];
    }

    public static m y(BufferedSource bufferedSource) {
        return new o(bufferedSource);
    }

    public abstract int C0(b bVar);

    public final void D0(boolean z10) {
        this.f17935q = z10;
    }

    public abstract c E();

    public abstract void E0();

    public abstract m F();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final k F0(String str) {
        throw new k(str + " at path " + r());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final j I0(Object obj, Object obj2) {
        if (obj == null) {
            return new j("Expected " + obj2 + " but was null at path " + r());
        }
        return new j("Expected " + obj2 + " but was " + obj + ", a " + obj.getClass().getName() + ", at path " + r());
    }

    public abstract void L();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(int i10) {
        int i11 = this.f17930d;
        int[] iArr = this.f17931e;
        if (i11 == iArr.length) {
            if (i11 != 256) {
                this.f17931e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f17932i;
                this.f17932i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f17933o;
                this.f17933o = Arrays.copyOf(iArr2, iArr2.length * 2);
            } else {
                throw new j("Nesting too deep at " + r());
            }
        }
        int[] iArr3 = this.f17931e;
        int i12 = this.f17930d;
        this.f17930d = i12 + 1;
        iArr3[i12] = i10;
    }

    public abstract void P();

    public final Object V() {
        switch (a.f17936a[E().ordinal()]) {
            case 1:
                ArrayList arrayList = new ArrayList();
                v();
                while (hasNext()) {
                    arrayList.add(V());
                }
                t();
                return arrayList;
            case 2:
                u uVar = new u();
                s();
                while (hasNext()) {
                    String m02 = m0();
                    Object V = V();
                    Object put = uVar.put(m02, V);
                    if (put != null) {
                        throw new j("Map key '" + m02 + "' has multiple values at path " + r() + ": " + put + " and " + V);
                    }
                }
                z();
                return uVar;
            case 3:
                return f1();
            case 4:
                return Double.valueOf(nextDouble());
            case 5:
                return Boolean.valueOf(k());
            case 6:
                return m();
            default:
                throw new IllegalStateException("Expected a value but was " + E() + " at path " + r());
        }
    }

    public abstract int W(b bVar);

    public final boolean a() {
        return this.f17935q;
    }

    public abstract String f1();

    public final boolean h() {
        return this.f17934p;
    }

    public abstract boolean hasNext();

    public abstract boolean k();

    public abstract Object m();

    public abstract String m0();

    public abstract double nextDouble();

    public abstract int nextInt();

    public abstract long nextLong();

    public abstract BufferedSource o();

    public final String r() {
        return n.a(this.f17930d, this.f17931e, this.f17932i, this.f17933o);
    }

    public abstract void s();

    public abstract void t();

    public abstract void v();

    public final void w(boolean z10) {
        this.f17934p = z10;
    }

    public abstract void z();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(m mVar) {
        this.f17930d = mVar.f17930d;
        this.f17931e = (int[]) mVar.f17931e.clone();
        this.f17932i = (String[]) mVar.f17932i.clone();
        this.f17933o = (int[]) mVar.f17933o.clone();
        this.f17934p = mVar.f17934p;
        this.f17935q = mVar.f17935q;
    }
}
