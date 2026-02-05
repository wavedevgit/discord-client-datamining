package com.discord.media.utils;

import java.io.File;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\t\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u0017\u0010\n\u001a\u00020\u00042\u0006\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\n\u0010\u000bJ\u0017\u0010\f\u001a\u00020\b2\u0006\u0010\t\u001a\u00020\bH\u0016¢\u0006\u0004\b\f\u0010\rR\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010\u000eR\u0014\u0010\u0005\u001a\u00020\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010\u000fR\u0016\u0010\u0010\u001a\u00020\u00048\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u000f¨\u0006\u0011"}, d2 = {"Lcom/discord/media/utils/QualityAndResolutionConstraint;", "Lfr/a;", "", "quality", "", "shouldResize", "<init>", "(IZ)V", "Ljava/io/File;", "imageFile", "isSatisfied", "(Ljava/io/File;)Z", "satisfy", "(Ljava/io/File;)Ljava/io/File;", "I", "Z", "isResolved", "media_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class QualityAndResolutionConstraint implements fr.a {
    private boolean isResolved;
    private final int quality;
    private final boolean shouldResize;

    public QualityAndResolutionConstraint(int i10, boolean z10) {
        this.quality = i10;
        this.shouldResize = z10;
    }

    @Override // fr.a
    public boolean isSatisfied(@NotNull File imageFile) {
        Intrinsics.checkNotNullParameter(imageFile, "imageFile");
        return this.isResolved;
    }

    @Override // fr.a
    @NotNull
    public File satisfy(@NotNull File imageFile) {
        File k10;
        Intrinsics.checkNotNullParameter(imageFile, "imageFile");
        if (this.shouldResize) {
            k10 = er.c.k(imageFile, er.c.f(imageFile, er.c.e(imageFile, 612, 816)), null, this.quality, 4, null);
        } else {
            k10 = er.c.k(imageFile, er.c.i(imageFile), null, this.quality, 4, null);
        }
        this.isResolved = true;
        return k10;
    }
}
