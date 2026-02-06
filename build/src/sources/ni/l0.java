package ni;

import java.util.AbstractMap;
import java.util.Arrays;
import java.util.Map;
import java.util.Objects;
import ni.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l0 extends t {

    /* renamed from: s  reason: collision with root package name */
    static final t f40800s = new l0(null, new Object[0], 0);

    /* renamed from: p  reason: collision with root package name */
    private final transient Object f40801p;

    /* renamed from: q  reason: collision with root package name */
    final transient Object[] f40802q;

    /* renamed from: r  reason: collision with root package name */
    private final transient int f40803r;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a extends u {

        /* renamed from: i  reason: collision with root package name */
        private final transient t f40804i;

        /* renamed from: o  reason: collision with root package name */
        private final transient Object[] f40805o;

        /* renamed from: p  reason: collision with root package name */
        private final transient int f40806p;

        /* renamed from: q  reason: collision with root package name */
        private final transient int f40807q;

        /* renamed from: ni.l0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        class C0546a extends s {
            C0546a() {
            }

            @Override // java.util.List
            /* renamed from: C */
            public Map.Entry get(int i10) {
                mi.m.h(i10, a.this.f40807q);
                int i11 = i10 * 2;
                Object obj = a.this.f40805o[a.this.f40806p + i11];
                Objects.requireNonNull(obj);
                Object obj2 = a.this.f40805o[i11 + (a.this.f40806p ^ 1)];
                Objects.requireNonNull(obj2);
                return new AbstractMap.SimpleImmutableEntry(obj, obj2);
            }

            @Override // ni.q
            public boolean g() {
                return true;
            }

            @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
            public int size() {
                return a.this.f40807q;
            }
        }

        a(t tVar, Object[] objArr, int i10, int i11) {
            this.f40804i = tVar;
            this.f40805o = objArr;
            this.f40806p = i10;
            this.f40807q = i11;
        }

        @Override // ni.q
        int c(Object[] objArr, int i10) {
            return b().c(objArr, i10);
        }

        @Override // ni.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                Object key = entry.getKey();
                Object value = entry.getValue();
                if (value != null && value.equals(this.f40804i.get(key))) {
                    return true;
                }
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ni.q
        public boolean g() {
            return true;
        }

        @Override // ni.u
        s q() {
            return new C0546a();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        /* renamed from: s */
        public t0 iterator() {
            return b().iterator();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return this.f40807q;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends u {

        /* renamed from: i  reason: collision with root package name */
        private final transient t f40809i;

        /* renamed from: o  reason: collision with root package name */
        private final transient s f40810o;

        b(t tVar, s sVar) {
            this.f40809i = tVar;
            this.f40810o = sVar;
        }

        @Override // ni.u, ni.q
        public s b() {
            return this.f40810o;
        }

        @Override // ni.q
        int c(Object[] objArr, int i10) {
            return b().c(objArr, i10);
        }

        @Override // ni.q, java.util.AbstractCollection, java.util.Collection, java.util.Set
        public boolean contains(Object obj) {
            if (this.f40809i.get(obj) != null) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ni.q
        public boolean g() {
            return true;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
        /* renamed from: s */
        public t0 iterator() {
            return b().iterator();
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
        public int size() {
            return this.f40809i.size();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends s {

        /* renamed from: i  reason: collision with root package name */
        private final transient Object[] f40811i;

        /* renamed from: o  reason: collision with root package name */
        private final transient int f40812o;

        /* renamed from: p  reason: collision with root package name */
        private final transient int f40813p;

        c(Object[] objArr, int i10, int i11) {
            this.f40811i = objArr;
            this.f40812o = i10;
            this.f40813p = i11;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // ni.q
        public boolean g() {
            return true;
        }

        @Override // java.util.List
        public Object get(int i10) {
            mi.m.h(i10, this.f40813p);
            Object obj = this.f40811i[(i10 * 2) + this.f40812o];
            Objects.requireNonNull(obj);
            return obj;
        }

        @Override // java.util.AbstractCollection, java.util.Collection, java.util.List
        public int size() {
            return this.f40813p;
        }
    }

    private l0(Object obj, Object[] objArr, int i10) {
        this.f40801p = obj;
        this.f40802q = objArr;
        this.f40803r = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static l0 l(int i10, Object[] objArr, t.a aVar) {
        if (i10 == 0) {
            return (l0) f40800s;
        }
        if (i10 == 1) {
            Object obj = objArr[0];
            Objects.requireNonNull(obj);
            Object obj2 = objArr[1];
            Objects.requireNonNull(obj2);
            h.a(obj, obj2);
            return new l0(null, objArr, 1);
        }
        mi.m.l(i10, objArr.length >> 1);
        Object m10 = m(objArr, i10, u.j(i10), 0);
        if (m10 instanceof Object[]) {
            Object[] objArr2 = (Object[]) m10;
            t.a.C0548a c0548a = (t.a.C0548a) objArr2[2];
            if (aVar != null) {
                aVar.f40852e = c0548a;
                Object obj3 = objArr2[0];
                int intValue = ((Integer) objArr2[1]).intValue();
                objArr = Arrays.copyOf(objArr, intValue * 2);
                m10 = obj3;
                i10 = intValue;
            } else {
                throw c0548a.a();
            }
        }
        return new l0(m10, objArr, i10);
    }

    private static Object m(Object[] objArr, int i10, int i11, int i12) {
        int i13;
        t.a.C0548a c0548a = null;
        int i14 = 1;
        if (i10 == 1) {
            Object obj = objArr[i12];
            Objects.requireNonNull(obj);
            Object obj2 = objArr[i12 ^ 1];
            Objects.requireNonNull(obj2);
            h.a(obj, obj2);
            return null;
        }
        int i15 = i11 - 1;
        if (i11 <= 128) {
            byte[] bArr = new byte[i11];
            Arrays.fill(bArr, (byte) -1);
            int i16 = 0;
            for (int i17 = 0; i17 < i10; i17++) {
                int i18 = (i17 * 2) + i12;
                int i19 = (i16 * 2) + i12;
                Object obj3 = objArr[i18];
                Objects.requireNonNull(obj3);
                Object obj4 = objArr[i18 ^ 1];
                Objects.requireNonNull(obj4);
                h.a(obj3, obj4);
                int b10 = p.b(obj3.hashCode());
                while (true) {
                    int i20 = b10 & i15;
                    int i21 = bArr[i20] & 255;
                    if (i21 == 255) {
                        bArr[i20] = (byte) i19;
                        if (i16 < i17) {
                            objArr[i19] = obj3;
                            objArr[i19 ^ 1] = obj4;
                        }
                        i16++;
                    } else if (obj3.equals(objArr[i21])) {
                        int i22 = i21 ^ 1;
                        Object obj5 = objArr[i22];
                        Objects.requireNonNull(obj5);
                        c0548a = new t.a.C0548a(obj3, obj4, obj5);
                        objArr[i22] = obj4;
                        break;
                    } else {
                        b10 = i20 + 1;
                    }
                }
            }
            return i16 == i10 ? bArr : new Object[]{bArr, Integer.valueOf(i16), c0548a};
        } else if (i11 <= 32768) {
            short[] sArr = new short[i11];
            Arrays.fill(sArr, (short) -1);
            int i23 = 0;
            for (int i24 = 0; i24 < i10; i24++) {
                int i25 = (i24 * 2) + i12;
                int i26 = (i23 * 2) + i12;
                Object obj6 = objArr[i25];
                Objects.requireNonNull(obj6);
                Object obj7 = objArr[i25 ^ 1];
                Objects.requireNonNull(obj7);
                h.a(obj6, obj7);
                int b11 = p.b(obj6.hashCode());
                while (true) {
                    int i27 = b11 & i15;
                    int i28 = sArr[i27] & 65535;
                    if (i28 == 65535) {
                        sArr[i27] = (short) i26;
                        if (i23 < i24) {
                            objArr[i26] = obj6;
                            objArr[i26 ^ 1] = obj7;
                        }
                        i23++;
                    } else if (obj6.equals(objArr[i28])) {
                        int i29 = i28 ^ 1;
                        Object obj8 = objArr[i29];
                        Objects.requireNonNull(obj8);
                        c0548a = new t.a.C0548a(obj6, obj7, obj8);
                        objArr[i29] = obj7;
                        break;
                    } else {
                        b11 = i27 + 1;
                    }
                }
            }
            return i23 == i10 ? sArr : new Object[]{sArr, Integer.valueOf(i23), c0548a};
        } else {
            int[] iArr = new int[i11];
            Arrays.fill(iArr, -1);
            int i30 = 0;
            int i31 = 0;
            while (i30 < i10) {
                int i32 = (i30 * 2) + i12;
                int i33 = (i31 * 2) + i12;
                Object obj9 = objArr[i32];
                Objects.requireNonNull(obj9);
                Object obj10 = objArr[i32 ^ i14];
                Objects.requireNonNull(obj10);
                h.a(obj9, obj10);
                int b12 = p.b(obj9.hashCode());
                while (true) {
                    int i34 = b12 & i15;
                    int i35 = iArr[i34];
                    if (i35 == -1) {
                        iArr[i34] = i33;
                        if (i31 < i30) {
                            objArr[i33] = obj9;
                            objArr[i33 ^ 1] = obj10;
                        }
                        i31++;
                        i13 = i14;
                    } else {
                        i13 = i14;
                        if (obj9.equals(objArr[i35])) {
                            int i36 = i35 ^ 1;
                            Object obj11 = objArr[i36];
                            Objects.requireNonNull(obj11);
                            c0548a = new t.a.C0548a(obj9, obj10, obj11);
                            objArr[i36] = obj10;
                            break;
                        }
                        b12 = i34 + 1;
                        i14 = i13;
                    }
                }
                i30++;
                i14 = i13;
            }
            int i37 = i14;
            if (i31 == i10) {
                return iArr;
            }
            Object[] objArr2 = new Object[3];
            objArr2[0] = iArr;
            objArr2[i37] = Integer.valueOf(i31);
            objArr2[2] = c0548a;
            return objArr2;
        }
    }

    static Object n(Object obj, Object[] objArr, int i10, int i11, Object obj2) {
        if (obj2 == null) {
            return null;
        }
        if (i10 == 1) {
            Object obj3 = objArr[i11];
            Objects.requireNonNull(obj3);
            if (!obj3.equals(obj2)) {
                return null;
            }
            Object obj4 = objArr[i11 ^ 1];
            Objects.requireNonNull(obj4);
            return obj4;
        } else if (obj == null) {
            return null;
        } else {
            if (obj instanceof byte[]) {
                byte[] bArr = (byte[]) obj;
                int length = bArr.length - 1;
                int b10 = p.b(obj2.hashCode());
                while (true) {
                    int i12 = b10 & length;
                    int i13 = bArr[i12] & 255;
                    if (i13 == 255) {
                        return null;
                    }
                    if (obj2.equals(objArr[i13])) {
                        return objArr[i13 ^ 1];
                    }
                    b10 = i12 + 1;
                }
            } else if (obj instanceof short[]) {
                short[] sArr = (short[]) obj;
                int length2 = sArr.length - 1;
                int b11 = p.b(obj2.hashCode());
                while (true) {
                    int i14 = b11 & length2;
                    int i15 = sArr[i14] & 65535;
                    if (i15 == 65535) {
                        return null;
                    }
                    if (obj2.equals(objArr[i15])) {
                        return objArr[i15 ^ 1];
                    }
                    b11 = i14 + 1;
                }
            } else {
                int[] iArr = (int[]) obj;
                int length3 = iArr.length - 1;
                int b12 = p.b(obj2.hashCode());
                while (true) {
                    int i16 = b12 & length3;
                    int i17 = iArr[i16];
                    if (i17 == -1) {
                        return null;
                    }
                    if (obj2.equals(objArr[i17])) {
                        return objArr[i17 ^ 1];
                    }
                    b12 = i16 + 1;
                }
            }
        }
    }

    @Override // ni.t
    u d() {
        return new a(this, this.f40802q, 0, this.f40803r);
    }

    @Override // ni.t
    u e() {
        return new b(this, new c(this.f40802q, 0, this.f40803r));
    }

    @Override // ni.t
    q f() {
        return new c(this.f40802q, 1, this.f40803r);
    }

    @Override // ni.t, java.util.Map
    public Object get(Object obj) {
        Object n10 = n(this.f40801p, this.f40802q, this.f40803r, 0, obj);
        if (n10 == null) {
            return null;
        }
        return n10;
    }

    @Override // ni.t
    boolean h() {
        return false;
    }

    @Override // java.util.Map
    public int size() {
        return this.f40803r;
    }
}
