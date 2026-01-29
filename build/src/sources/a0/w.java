package a0;

import a0.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface w extends e2 {

    /* renamed from: a  reason: collision with root package name */
    public static final r0.a f283a = r0.a.a("camerax.core.camera.useCaseConfigFactory", y2.class);

    /* renamed from: b  reason: collision with root package name */
    public static final r0.a f284b = r0.a.a("camerax.core.camera.compatibilityId", e1.class);

    /* renamed from: c  reason: collision with root package name */
    public static final r0.a f285c = r0.a.a("camerax.core.camera.useCaseCombinationRequiredRule", Integer.class);

    /* renamed from: d  reason: collision with root package name */
    public static final r0.a f286d = r0.a.a("camerax.core.camera.SessionProcessor", k2.class);

    /* renamed from: e  reason: collision with root package name */
    public static final r0.a f287e = r0.a.a("camerax.core.camera.isZslDisabled", Boolean.class);

    /* renamed from: f  reason: collision with root package name */
    public static final r0.a f288f = r0.a.a("camerax.core.camera.isPostviewSupported", Boolean.class);

    /* renamed from: g  reason: collision with root package name */
    public static final r0.a f289g = r0.a.a("camerax.core.camera.isCaptureProcessProgressSupported", Boolean.class);

    default k2 C(k2 k2Var) {
        android.support.v4.media.session.b.a(e(f286d, k2Var));
        return null;
    }

    default boolean I() {
        return ((Boolean) e(f288f, Boolean.FALSE)).booleanValue();
    }

    e1 N();

    default boolean O() {
        return ((Boolean) e(f289g, Boolean.FALSE)).booleanValue();
    }

    default y2 k() {
        return (y2) e(f283a, y2.f326a);
    }

    default int r() {
        return ((Integer) e(f285c, 0)).intValue();
    }
}
