package yn;

import android.content.Context;
import com.withpersona.sdk2.inquiry.network.core.GenericFileUploadErrorResponse;
import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import yn.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u2 {
    /* JADX INFO: Access modifiers changed from: private */
    public static final List c(List list) {
        List<String> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (String str : list2) {
            arrayList.add(new d.a(str, a.f54714e, 0, 4, null));
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final String d(GenericFileUploadErrorResponse.DocumentErrorResponse documentErrorResponse, Context context) {
        if (documentErrorResponse instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.DisabledFileTypeError) {
            GenericFileUploadErrorResponse.DocumentErrorResponse.DisabledFileTypeError disabledFileTypeError = (GenericFileUploadErrorResponse.DocumentErrorResponse.DisabledFileTypeError) documentErrorResponse;
            String string = context.getString(ep.e.f22487d, disabledFileTypeError.getDetails().getUploadedFileType(), CollectionsKt.x0(disabledFileTypeError.getDetails().getEnabledFileTypes(), ", ", null, null, 0, null, null, 62, null));
            Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
            return string;
        } else if (documentErrorResponse instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.FileLimitExceededError) {
            String string2 = context.getString(ep.e.f22488e);
            Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
            return string2;
        } else if (documentErrorResponse instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError) {
            String string3 = context.getString(ep.e.f22492i, Integer.valueOf(((GenericFileUploadErrorResponse.DocumentErrorResponse.PageLimitExceededError) documentErrorResponse).getDetails().getPageLimit()));
            Intrinsics.checkNotNullExpressionValue(string3, "getString(...)");
            return string3;
        } else if (documentErrorResponse instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedFileError) {
            String string4 = context.getString(ep.e.f22490g);
            Intrinsics.checkNotNullExpressionValue(string4, "getString(...)");
            return string4;
        } else if (documentErrorResponse instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedImageError) {
            String string5 = context.getString(ep.e.f22490g);
            Intrinsics.checkNotNullExpressionValue(string5, "getString(...)");
            return string5;
        } else if (documentErrorResponse instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.MalformedPdfError) {
            String string6 = context.getString(ep.e.f22491h);
            Intrinsics.checkNotNullExpressionValue(string6, "getString(...)");
            return string6;
        } else if (documentErrorResponse instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError) {
            String string7 = context.getString(ep.e.f22489f, Integer.valueOf(((GenericFileUploadErrorResponse.DocumentErrorResponse.GovernmentIdDimensionSizeError) documentErrorResponse).getDetails().getMinDimensionSize()));
            Intrinsics.checkNotNullExpressionValue(string7, "getString(...)");
            return string7;
        } else if (documentErrorResponse instanceof GenericFileUploadErrorResponse.DocumentErrorResponse.UnknownError) {
            String string8 = context.getString(ep.e.f22493j);
            Intrinsics.checkNotNullExpressionValue(string8, "getString(...)");
            return string8;
        } else {
            throw new lr.p();
        }
    }
}
