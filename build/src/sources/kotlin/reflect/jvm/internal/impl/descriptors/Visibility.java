package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class Visibility {

    /* renamed from: a  reason: collision with root package name */
    private final String f33626a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f33627b;

    /* JADX INFO: Access modifiers changed from: protected */
    public Visibility(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f33626a = name;
        this.f33627b = z10;
    }

    public Integer compareTo(@NotNull Visibility visibility) {
        Intrinsics.checkNotNullParameter(visibility, "visibility");
        return Visibilities.INSTANCE.compareLocal$compiler_common(this, visibility);
    }

    @NotNull
    public String getInternalDisplayName() {
        return this.f33626a;
    }

    public final boolean isPublicAPI() {
        return this.f33627b;
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
