package k5;

import h5.c;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class s implements p {

    /* renamed from: a  reason: collision with root package name */
    public static final a f32800a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public s(t tVar) {
    }

    @Override // k5.p
    public boolean a() {
        return o.f32789a.b(null);
    }

    @Override // k5.p
    public boolean b(h5.i iVar) {
        int i10;
        h5.c d10 = iVar.d();
        int i11 = Integer.MAX_VALUE;
        if (d10 instanceof c.a) {
            i10 = ((c.a) d10).f27531a;
        } else {
            i10 = Integer.MAX_VALUE;
        }
        if (i10 > 100) {
            h5.c c10 = iVar.c();
            if (c10 instanceof c.a) {
                i11 = ((c.a) c10).f27531a;
            }
            if (i11 > 100) {
                return true;
            }
            return false;
        }
        return false;
    }
}
