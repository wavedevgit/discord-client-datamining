package kotlin.reflect.jvm.internal.impl.platform;

import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class SimplePlatform {

    /* renamed from: a  reason: collision with root package name */
    private final String f34962a;

    /* renamed from: b  reason: collision with root package name */
    private final TargetPlatformVersion f34963b;

    @NotNull
    public String getTargetName() {
        return getTargetPlatformVersion().getDescription();
    }

    @NotNull
    public TargetPlatformVersion getTargetPlatformVersion() {
        return this.f34963b;
    }

    @NotNull
    public String toString() {
        String targetName = getTargetName();
        if (targetName.length() > 0) {
            return this.f34962a + " (" + targetName + ')';
        }
        return this.f34962a;
    }
}
