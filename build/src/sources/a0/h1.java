package a0;

import a0.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface h1 extends e2 {

    /* renamed from: h  reason: collision with root package name */
    public static final r0.a f76h = r0.a.a("camerax.core.imageInput.inputFormat", Integer.TYPE);

    /* renamed from: i  reason: collision with root package name */
    public static final r0.a f77i = r0.a.a("camerax.core.imageInput.inputDynamicRange", x.z.class);

    default x.z B() {
        return (x.z) b2.e.g((x.z) e(f77i, x.z.f54401c));
    }

    default int getInputFormat() {
        return ((Integer) a(f76h)).intValue();
    }
}
