package dm;

import android.content.Intent;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import java.util.ArrayList;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {
    public static final f a(ReadableMap readableMap) {
        String[] strArr;
        String str;
        boolean z10;
        boolean z11;
        boolean z12;
        boolean z13;
        Intrinsics.checkNotNullParameter(readableMap, "readableMap");
        String string = readableMap.getString("mode");
        boolean z14 = true;
        if (!readableMap.hasKey("type") || readableMap.isNull("type")) {
            strArr = new String[]{"*/*"};
        } else {
            ReadableArray array = readableMap.getArray("type");
            if (array == null || (strArr = b(array)) == null) {
                strArr = new String[]{"*/*"};
            }
        }
        String[] strArr2 = strArr;
        if (readableMap.hasKey("initialDirectoryUrl")) {
            str = readableMap.getString("initialDirectoryUrl");
        } else {
            str = null;
        }
        if (readableMap.hasKey("localOnly") && readableMap.getBoolean("localOnly")) {
            z10 = true;
        } else {
            z10 = true;
            z14 = false;
        }
        if (readableMap.hasKey("allowMultiSelection") && readableMap.getBoolean("allowMultiSelection")) {
            z11 = z10;
        } else {
            z11 = false;
        }
        if (readableMap.hasKey("requestLongTermAccess") && readableMap.getBoolean("requestLongTermAccess")) {
            z12 = z10;
        } else {
            z12 = false;
        }
        if (readableMap.hasKey("allowVirtualFiles") && readableMap.getBoolean("allowVirtualFiles")) {
            z13 = z10;
        } else {
            z13 = false;
        }
        return new f(string, strArr2, str, z14, z11, z12, z13);
    }

    public static final String[] b(ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(readableArray, "readableArray");
        ArrayList<Object> arrayList = readableArray.toArrayList();
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (Object obj : arrayList) {
            String normalizeMimeType = Intent.normalizeMimeType(String.valueOf(obj));
            Intrinsics.checkNotNull(normalizeMimeType);
            arrayList2.add(normalizeMimeType);
        }
        return (String[]) arrayList2.toArray(new String[0]);
    }
}
