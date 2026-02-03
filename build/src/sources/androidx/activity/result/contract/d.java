package androidx.activity.result.contract;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.pm.ResolveInfo;
import android.provider.MediaStore;
import androidx.activity.result.contract.ActivityResultContract;
import androidx.activity.result.contract.e;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d extends ActivityResultContract {

    /* renamed from: b  reason: collision with root package name */
    public static final a f926b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final int f927a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final int a() {
            if (e.f928a.d()) {
                return MediaStore.getPickImagesMaxLimit();
            }
            return Integer.MAX_VALUE;
        }

        private a() {
        }
    }

    public /* synthetic */ d(int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? f926b.a() : i10);
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: a */
    public Intent createIntent(Context context, d.f input) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(input, "input");
        e.a aVar = e.f928a;
        if (aVar.d()) {
            Intent intent = new Intent("android.provider.action.PICK_IMAGES");
            intent.setType(aVar.b(input.d()));
            int min = Math.min(this.f927a, input.c());
            if (min > 1 && min <= MediaStore.getPickImagesMaxLimit()) {
                intent.putExtra("android.provider.extra.PICK_IMAGES_MAX", min);
                intent.putExtra("android.provider.extra.PICK_IMAGES_LAUNCH_TAB", input.b().a());
                intent.putExtra("android.provider.extra.PICK_IMAGES_IN_ORDER", input.f());
                if (input.e()) {
                    intent.putExtra("android.provider.extra.PICK_IMAGES_ACCENT_COLOR", input.a());
                }
                return intent;
            }
            throw new IllegalArgumentException("Max items must be greater than 1 and lesser than or equal to MediaStore.getPickImagesMaxLimit()");
        } else if (aVar.c(context)) {
            ResolveInfo a10 = aVar.a(context);
            if (a10 != null) {
                ActivityInfo activityInfo = a10.activityInfo;
                Intent intent2 = new Intent("androidx.activity.result.contract.action.PICK_IMAGES");
                intent2.setClassName(activityInfo.applicationInfo.packageName, activityInfo.name);
                intent2.setType(aVar.b(input.d()));
                int min2 = Math.min(this.f927a, input.c());
                if (min2 > 1) {
                    intent2.putExtra("androidx.activity.result.contract.extra.PICK_IMAGES_MAX", min2);
                    intent2.putExtra("androidx.activity.result.contract.extra.PICK_IMAGES_LAUNCH_TAB", input.b().a());
                    intent2.putExtra("androidx.activity.result.contract.extra.PICK_IMAGES_IN_ORDER", input.f());
                    if (input.e()) {
                        intent2.putExtra("androidx.activity.result.contract.extra.PICK_IMAGES_ACCENT_COLOR", input.a());
                    }
                    return intent2;
                }
                throw new IllegalArgumentException("Max items must be greater than 1");
            }
            throw new IllegalStateException("Required value was null.");
        } else {
            Intent intent3 = new Intent("android.intent.action.OPEN_DOCUMENT");
            intent3.setType(aVar.b(input.d()));
            intent3.putExtra("android.intent.extra.ALLOW_MULTIPLE", true);
            if (intent3.getType() == null) {
                intent3.setType("*/*");
                intent3.putExtra("android.intent.extra.MIME_TYPES", new String[]{"image/*", "video/*"});
            }
            return intent3;
        }
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: b */
    public final ActivityResultContract.a getSynchronousResult(Context context, d.f input) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(input, "input");
        return null;
    }

    @Override // androidx.activity.result.contract.ActivityResultContract
    /* renamed from: c */
    public final List parseResult(int i10, Intent intent) {
        List a10;
        if (i10 != -1) {
            intent = null;
        }
        if (intent != null && (a10 = androidx.activity.result.contract.a.f925a.a(intent)) != null) {
            return a10;
        }
        return CollectionsKt.l();
    }

    public d(int i10) {
        this.f927a = i10;
        if (i10 <= 1) {
            throw new IllegalArgumentException("Max items must be higher than 1");
        }
    }
}
