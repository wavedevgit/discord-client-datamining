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
    int f18542d;

    /* renamed from: e  reason: collision with root package name */
    int[] f18543e;

    /* renamed from: i  reason: collision with root package name */
    String[] f18544i;

    /* renamed from: o  reason: collision with root package name */
    int[] f18545o;

    /* renamed from: p  reason: collision with root package name */
    boolean f18546p;

    /* renamed from: q  reason: collision with root package name */
    boolean f18547q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f18548a;

        static {
            int[] iArr = new int[c.values().length];
            f18548a = iArr;
            try {
                iArr[c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f18548a[c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f18548a[c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f18548a[c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f18548a[c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f18548a[c.NULL.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final String[] f18549a;

        /* renamed from: b  reason: collision with root package name */
        final ju.a0 f18550b;

        private b(String[] strArr, ju.a0 a0Var) {
            this.f18549a = strArr;
            this.f18550b = a0Var;
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
                return new b((String[]) strArr.clone(), ju.a0.k(byteStringArr));
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
        this.f18543e = new int[32];
        this.f18544i = new String[32];
        this.f18545o = new int[32];
    }

    public static m B(BufferedSource bufferedSource) {
        return new o(bufferedSource);
    }

    public abstract int D0(b bVar);

    public abstract c E();

    public final void E0(boolean z10) {
        this.f18547q = z10;
    }

    public abstract m F();

    public abstract void F0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final k G0(String str) {
        throw new k(str + " at path " + q());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final j J0(Object obj, Object obj2) {
        if (obj == null) {
            return new j("Expected " + obj2 + " but was null at path " + q());
        }
        return new j("Expected " + obj2 + " but was " + obj + ", a " + obj.getClass().getName() + ", at path " + q());
    }

    public abstract void L();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void N(int i10) {
        int i11 = this.f18542d;
        int[] iArr = this.f18543e;
        if (i11 == iArr.length) {
            if (i11 != 256) {
                this.f18543e = Arrays.copyOf(iArr, iArr.length * 2);
                String[] strArr = this.f18544i;
                this.f18544i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
                int[] iArr2 = this.f18545o;
                this.f18545o = Arrays.copyOf(iArr2, iArr2.length * 2);
            } else {
                throw new j("Nesting too deep at " + q());
            }
        }
        int[] iArr3 = this.f18543e;
        int i12 = this.f18542d;
        this.f18542d = i12 + 1;
        iArr3[i12] = i10;
    }

    public abstract void P();

    public final Object V() {
        switch (a.f18548a[E().ordinal()]) {
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
                    String m02 = m0();
                    Object V = V();
                    Object put = uVar.put(m02, V);
                    if (put != null) {
                        throw new j("Map key '" + m02 + "' has multiple values at path " + q() + ": " + put + " and " + V);
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
        return this.f18547q;
    }

    public abstract String f1();

    public final boolean h() {
        return this.f18546p;
    }

    public abstract boolean hasNext();

    public abstract boolean l();

    public abstract String m0();

    public abstract Object n();

    public abstract double nextDouble();

    public abstract int nextInt();

    public abstract long nextLong();

    public final String q() {
        return n.a(this.f18542d, this.f18543e, this.f18544i, this.f18545o);
    }

    public abstract void r();

    public abstract void s();

    public abstract int t0(b bVar);

    public abstract void u();

    public final void v(boolean z10) {
        this.f18546p = z10;
    }

    public abstract BufferedSource x();

    public abstract void y();

    /* JADX INFO: Access modifiers changed from: package-private */
    public m(m mVar) {
        this.f18542d = mVar.f18542d;
        this.f18543e = (int[]) mVar.f18543e.clone();
        this.f18544i = (String[]) mVar.f18544i.clone();
        this.f18545o = (int[]) mVar.f18545o.clone();
        this.f18546p = mVar.f18546p;
        this.f18547q = mVar.f18547q;
    }
}
