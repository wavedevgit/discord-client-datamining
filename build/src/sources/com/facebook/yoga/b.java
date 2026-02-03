package com.facebook.yoga;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends YogaConfig {

    /* renamed from: a  reason: collision with root package name */
    long f12214a;

    private b(long j10) {
        if (j10 != 0) {
            this.f12214a = j10;
            return;
        }
        throw new IllegalStateException("Failed to allocate native memory");
    }

    @Override // com.facebook.yoga.YogaConfig
    public void a(f fVar) {
        YogaNative.jni_YGConfigSetErrataJNI(this.f12214a, fVar.d());
    }

    @Override // com.facebook.yoga.YogaConfig
    public void b(float f10) {
        YogaNative.jni_YGConfigSetPointScaleFactorJNI(this.f12214a, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b() {
        this(YogaNative.jni_YGConfigNewJNI());
    }
}
