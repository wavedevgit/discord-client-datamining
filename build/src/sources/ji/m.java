package ji;

import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final m f31893a = new a();

    /* renamed from: b  reason: collision with root package name */
    private static final m f31894b = new b(-1);

    /* renamed from: c  reason: collision with root package name */
    private static final m f31895c = new b(1);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends m {
        a() {
            super(null);
        }

        @Override // ji.m
        public m d(int i10, int i11) {
            return k(li.e.e(i10, i11));
        }

        @Override // ji.m
        public m e(long j10, long j11) {
            return k(li.g.a(j10, j11));
        }

        @Override // ji.m
        public m f(Object obj, Object obj2, Comparator comparator) {
            return k(comparator.compare(obj, obj2));
        }

        @Override // ji.m
        public m g(boolean z10, boolean z11) {
            return k(li.a.a(z10, z11));
        }

        @Override // ji.m
        public m h(boolean z10, boolean z11) {
            return k(li.a.a(z11, z10));
        }

        @Override // ji.m
        public int i() {
            return 0;
        }

        m k(int i10) {
            if (i10 < 0) {
                return m.f31894b;
            }
            return i10 > 0 ? m.f31895c : m.f31893a;
        }
    }

    /* synthetic */ m(a aVar) {
        this();
    }

    public static m j() {
        return f31893a;
    }

    public abstract m d(int i10, int i11);

    public abstract m e(long j10, long j11);

    public abstract m f(Object obj, Object obj2, Comparator comparator);

    public abstract m g(boolean z10, boolean z11);

    public abstract m h(boolean z10, boolean z11);

    public abstract int i();

    private m() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b extends m {

        /* renamed from: d  reason: collision with root package name */
        final int f31896d;

        b(int i10) {
            super(null);
            this.f31896d = i10;
        }

        @Override // ji.m
        public int i() {
            return this.f31896d;
        }

        @Override // ji.m
        public m d(int i10, int i11) {
            return this;
        }

        @Override // ji.m
        public m e(long j10, long j11) {
            return this;
        }

        @Override // ji.m
        public m g(boolean z10, boolean z11) {
            return this;
        }

        @Override // ji.m
        public m h(boolean z10, boolean z11) {
            return this;
        }

        @Override // ji.m
        public m f(Object obj, Object obj2, Comparator comparator) {
            return this;
        }
    }
}
