package z9;

import android.util.Log;
import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import z9.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends z9.a {

    /* renamed from: o  reason: collision with root package name */
    public static final a f55977o = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private final List f55978i = new ArrayList(2);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    @Override // z9.a, z9.b
    public void a(String id2, Object obj, b.a aVar) {
        Intrinsics.checkNotNullParameter(id2, "id");
        int size = this.f55978i.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                try {
                    ((b) this.f55978i.get(i10)).a(id2, obj, aVar);
                    Unit unit = Unit.f32056a;
                } catch (Exception e10) {
                    Log.e("FwdControllerListener2", "InternalListener exception in onFinalImageSet", e10);
                }
            } catch (IndexOutOfBoundsException unused) {
                return;
            }
        }
    }

    @Override // z9.a, z9.b
    public void g(String id2, Throwable th2, b.a aVar) {
        Intrinsics.checkNotNullParameter(id2, "id");
        int size = this.f55978i.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                try {
                    ((b) this.f55978i.get(i10)).g(id2, th2, aVar);
                    Unit unit = Unit.f32056a;
                } catch (Exception e10) {
                    Log.e("FwdControllerListener2", "InternalListener exception in onFailure", e10);
                }
            } catch (IndexOutOfBoundsException unused) {
                return;
            }
        }
    }

    @Override // z9.a, z9.b
    public void k(String id2) {
        Intrinsics.checkNotNullParameter(id2, "id");
        int size = this.f55978i.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                try {
                    ((b) this.f55978i.get(i10)).k(id2);
                    Unit unit = Unit.f32056a;
                } catch (Exception e10) {
                    Log.e("FwdControllerListener2", "InternalListener exception in onIntermediateImageFailed", e10);
                }
            } catch (IndexOutOfBoundsException unused) {
                return;
            }
        }
    }

    @Override // z9.a, z9.b
    public void n(String id2, b.a aVar) {
        Intrinsics.checkNotNullParameter(id2, "id");
        int size = this.f55978i.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                try {
                    ((b) this.f55978i.get(i10)).n(id2, aVar);
                    Unit unit = Unit.f32056a;
                } catch (Exception e10) {
                    Log.e("FwdControllerListener2", "InternalListener exception in onRelease", e10);
                }
            } catch (IndexOutOfBoundsException unused) {
                return;
            }
        }
    }

    @Override // z9.a, z9.b
    public void onIntermediateImageSet(String id2, Object obj) {
        Intrinsics.checkNotNullParameter(id2, "id");
        int size = this.f55978i.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                try {
                    ((b) this.f55978i.get(i10)).onIntermediateImageSet(id2, obj);
                    Unit unit = Unit.f32056a;
                } catch (Exception e10) {
                    Log.e("FwdControllerListener2", "InternalListener exception in onIntermediateImageSet", e10);
                }
            } catch (IndexOutOfBoundsException unused) {
                return;
            }
        }
    }

    @Override // z9.a, z9.b
    public void p(String id2, Object obj, b.a aVar) {
        Intrinsics.checkNotNullParameter(id2, "id");
        int size = this.f55978i.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                try {
                    ((b) this.f55978i.get(i10)).p(id2, obj, aVar);
                    Unit unit = Unit.f32056a;
                } catch (Exception e10) {
                    Log.e("FwdControllerListener2", "InternalListener exception in onSubmit", e10);
                }
            } catch (IndexOutOfBoundsException unused) {
                return;
            }
        }
    }

    public final synchronized void s(b listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.f55978i.add(listener);
    }

    public final synchronized void y(b listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        this.f55978i.remove(listener);
    }
}
