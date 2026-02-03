package xo;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f53522a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f53523b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f53524c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f53522a = pictureLaunchResultLauncher;
        this.f53523b = openDocumentsResultLauncher;
        this.f53524c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f53523b;
    }

    public final ActivityResultLauncher b() {
        return this.f53524c;
    }

    public final ActivityResultLauncher c() {
        return this.f53522a;
    }
}
