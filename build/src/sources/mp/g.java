package mp;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f36577a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f36578b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f36579c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f36577a = pictureLaunchResultLauncher;
        this.f36578b = openDocumentsResultLauncher;
        this.f36579c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f36578b;
    }

    public final ActivityResultLauncher b() {
        return this.f36579c;
    }

    public final ActivityResultLauncher c() {
        return this.f36577a;
    }
}
