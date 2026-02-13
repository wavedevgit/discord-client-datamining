package mp;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f37145a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f37146b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f37147c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f37145a = pictureLaunchResultLauncher;
        this.f37146b = openDocumentsResultLauncher;
        this.f37147c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f37146b;
    }

    public final ActivityResultLauncher b() {
        return this.f37147c;
    }

    public final ActivityResultLauncher c() {
        return this.f37145a;
    }
}
