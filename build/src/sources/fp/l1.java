package fp;

import android.content.Context;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyle;
import fp.c1;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import zm.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class l1 {
    public static final List a(Context context, List permissions) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(permissions, "permissions");
        ArrayList arrayList = new ArrayList();
        for (Object obj : permissions) {
            if (!b(context, (d0) obj)) {
                arrayList.add(obj);
            }
        }
        return arrayList;
    }

    public static final boolean b(Context context, d0 permission) {
        Intrinsics.checkNotNullParameter(context, "<this>");
        Intrinsics.checkNotNullParameter(permission, "permission");
        if (androidx.core.content.a.a(context, k1.b(permission)) == 0) {
            return true;
        }
        return false;
    }

    public static final cp.c c(Object obj) {
        Intrinsics.checkNotNullParameter(obj, "<this>");
        return new cp.c(obj, CollectionsKt.l(), "PermissionFlowModal");
    }

    public static final cp.c d(Object obj, k.a context, boolean z10, d0 permission, boolean z11, String title, String rationale, String rationaleWhenPermanentlyDenied, String str, String str2, String str3, String str4, String str5, c1 permissionRequestWorkflow, StepStyle stepStyle, String key, Function1 handler) {
        cp.c a10;
        Intrinsics.checkNotNullParameter(obj, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(permission, "permission");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(rationale, "rationale");
        Intrinsics.checkNotNullParameter(rationaleWhenPermanentlyDenied, "rationaleWhenPermanentlyDenied");
        Intrinsics.checkNotNullParameter(permissionRequestWorkflow, "permissionRequestWorkflow");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (z10) {
            Object b10 = context.b(permissionRequestWorkflow, new c1.c(permission, z11, title, rationale, rationaleWhenPermanentlyDenied, str, str2, str3, str4, str5, stepStyle), key, handler);
            if (b10 != null && (a10 = cp.d.a(b10, obj, "PermissionFlowModal")) != null) {
                return a10;
            }
            return c(obj);
        }
        return c(obj);
    }

    public static /* synthetic */ cp.c e(Object obj, k.a aVar, boolean z10, d0 d0Var, boolean z11, String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, c1 c1Var, StepStyle stepStyle, String str9, Function1 function1, int i10, Object obj2) {
        boolean z12;
        String str10;
        String str11;
        String str12;
        String str13;
        if ((i10 & 8) != 0) {
            z12 = false;
        } else {
            z12 = z11;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            str10 = null;
        } else {
            str10 = str6;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            str11 = null;
        } else {
            str11 = str7;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0) {
            str12 = null;
        } else {
            str12 = str8;
        }
        if ((i10 & 16384) != 0) {
            str13 = "";
        } else {
            str13 = str9;
        }
        return d(obj, aVar, z10, d0Var, z12, str, str2, str3, str4, str5, str10, str11, str12, c1Var, stepStyle, str13, function1);
    }
}
