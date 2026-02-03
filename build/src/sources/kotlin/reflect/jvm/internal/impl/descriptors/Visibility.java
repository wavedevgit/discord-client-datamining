package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class Visibility {

    /* renamed from: a  reason: collision with root package name */
    private final String f32792a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32793b;

    /* JADX INFO: Access modifiers changed from: protected */
    public Visibility(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f32792a = name;
        this.f32793b = z10;
    }

    public Integer compareTo(@NotNull Visibility visibility) {
        Intrinsics.checkNotNullParameter(visibility, "visibility");
        return Visibilities.INSTANCE.compareLocal$compiler_common(this, visibility);
    }

    @NotNull
    public String getInternalDisplayName() {
        return this.f32792a;
    }

    public final boolean isPublicAPI() {
        return this.f32793b;
    }

    @NotNull
    public Visibility normalize() {
        return this;
    }

    @NotNull
    public final String toString() {
        return getInternalDisplayName();
    }
}
