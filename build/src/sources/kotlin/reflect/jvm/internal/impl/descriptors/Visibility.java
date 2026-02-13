package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class Visibility {

    /* renamed from: a  reason: collision with root package name */
    private final String f32884a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f32885b;

    /* JADX INFO: Access modifiers changed from: protected */
    public Visibility(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f32884a = name;
        this.f32885b = z10;
    }

    public Integer compareTo(@NotNull Visibility visibility) {
        Intrinsics.checkNotNullParameter(visibility, "visibility");
        return Visibilities.INSTANCE.compareLocal$compiler_common(this, visibility);
    }

    @NotNull
    public String getInternalDisplayName() {
        return this.f32884a;
    }

    public final boolean isPublicAPI() {
        return this.f32885b;
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
