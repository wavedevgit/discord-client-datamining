package com.discord.image.fresco;

import android.net.Uri;
import com.facebook.drawee.controller.ControllerListener;
import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.reactnativecommunity.clipboard.ClipboardModule;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import x8.f;
@Metadata(d1 = {"\u0000,\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\u001a]\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\b\u0010\u0003\u001a\u0004\u0018\u00010\u00042\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u00062\u0012\b\u0002\u0010\b\u001a\f\u0012\u0006\b\u0000\u0012\u00020\n\u0018\u00010\t2\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\f¢\u0006\u0002\u0010\u000e¨\u0006\u000f"}, d2 = {"setOptionalImageUrl", "", "Lcom/facebook/drawee/view/SimpleDraweeView;", "imageUrl", "", "autoPlayAnimations", "", "srcIsAnimated", "controllerListener", "Lcom/facebook/drawee/controller/ControllerListener;", "", "resizeWidthPx", "", "resizeHeightPx", "(Lcom/facebook/drawee/view/SimpleDraweeView;Ljava/lang/String;Ljava/lang/Boolean;Ljava/lang/Boolean;Lcom/facebook/drawee/controller/ControllerListener;Ljava/lang/Integer;Ljava/lang/Integer;)V", "fresco_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SetOptionalImageUrlKt {
    public static final void setOptionalImageUrl(@NotNull SimpleDraweeView simpleDraweeView, String str, Boolean bool, Boolean bool2, ControllerListener controllerListener, Integer num, Integer num2) {
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        boolean z14;
        Intrinsics.checkNotNullParameter(simpleDraweeView, "<this>");
        if (str != null && !StringsKt.k0(str)) {
            Uri r10 = f.r(str);
            if (r10 == null) {
                return;
            }
            String lastPathSegment = r10.getLastPathSegment();
            String str2 = null;
            if (Intrinsics.areEqual(r10.getScheme(), "content")) {
                try {
                    str2 = simpleDraweeView.getContext().getContentResolver().getType(r10);
                } catch (Exception unused) {
                }
            }
            if (!Intrinsics.areEqual(str2, "image/gif") && (lastPathSegment == null || !StringsKt.y(lastPathSegment, ".gif", true))) {
                z10 = false;
            } else {
                z10 = true;
            }
            if (!Intrinsics.areEqual(str2, ClipboardModule.MIMETYPE_WEBP) && (lastPathSegment == null || !StringsKt.y(lastPathSegment, ".webp", true))) {
                z11 = false;
            } else {
                z11 = true;
            }
            if (!Intrinsics.areEqual(str2, "image/avif") && (lastPathSegment == null || !StringsKt.y(lastPathSegment, ".avif", true))) {
                z12 = false;
            } else {
                z12 = true;
            }
            if (Intrinsics.areEqual(bool2, Boolean.TRUE) && (z11 || z12)) {
                z13 = true;
            } else {
                z13 = false;
            }
            if ((z10 || z13) && !Intrinsics.areEqual(bool, Boolean.FALSE)) {
                z14 = true;
            } else {
                z14 = false;
            }
            Uri.Builder buildUpon = r10.buildUpon();
            String lastPathSegment2 = r10.getLastPathSegment();
            if (lastPathSegment2 != null && StringsKt.y(lastPathSegment2, ".avif", true)) {
                buildUpon.appendQueryParameter("format", "webp");
            }
            if (z14 && z13) {
                buildUpon.appendQueryParameter("animated", "true");
            }
            ImageRequestBuilder x10 = ImageRequestBuilder.x(buildUpon.build());
            if (num != null && num.intValue() > 0 && num2 != null && num2.intValue() > 0) {
                x10.N(ResizeOptions.f11063e.a(num.intValue(), num2.intValue()));
            }
            simpleDraweeView.setController(simpleDraweeView.getControllerBuilder().A(z14).D(controllerListener).E(x10.a()).b(simpleDraweeView.getController()).build());
            simpleDraweeView.setVisibility(0);
            return;
        }
        simpleDraweeView.setVisibility(8);
    }

    public static /* synthetic */ void setOptionalImageUrl$default(SimpleDraweeView simpleDraweeView, String str, Boolean bool, Boolean bool2, ControllerListener controllerListener, Integer num, Integer num2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            bool = null;
        }
        if ((i10 & 4) != 0) {
            bool2 = Boolean.FALSE;
        }
        if ((i10 & 8) != 0) {
            controllerListener = null;
        }
        if ((i10 & 16) != 0) {
            num = null;
        }
        if ((i10 & 32) != 0) {
            num2 = null;
        }
        setOptionalImageUrl(simpleDraweeView, str, bool, bool2, controllerListener, num, num2);
    }
}
