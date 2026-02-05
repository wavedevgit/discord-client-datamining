package androidx.sharetarget;

import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.pm.ResolveInfo;
import android.content.res.XmlResourceParser;
import android.os.Bundle;
import android.util.Log;
import androidx.sharetarget.a;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static volatile ArrayList f5190a;

    /* renamed from: b  reason: collision with root package name */
    private static final Object f5191b = new Object();

    private static String a(XmlResourceParser xmlResourceParser, String str) {
        String attributeValue = xmlResourceParser.getAttributeValue("http://schemas.android.com/apk/res/android", str);
        if (attributeValue == null) {
            return xmlResourceParser.getAttributeValue(null, str);
        }
        return attributeValue;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static ArrayList b(Context context) {
        if (f5190a == null) {
            synchronized (f5191b) {
                try {
                    if (f5190a == null) {
                        f5190a = e(context);
                    }
                } finally {
                }
            }
        }
        return f5190a;
    }

    private static XmlResourceParser c(Context context, ActivityInfo activityInfo) {
        XmlResourceParser loadXmlMetaData = activityInfo.loadXmlMetaData(context.getPackageManager(), "android.app.shortcuts");
        if (loadXmlMetaData != null) {
            return loadXmlMetaData;
        }
        throw new IllegalArgumentException("Failed to open android.app.shortcuts meta-data resource of " + activityInfo.name);
    }

    private static a d(XmlResourceParser xmlResourceParser) {
        String a10 = a(xmlResourceParser, "targetClass");
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        while (true) {
            int next = xmlResourceParser.next();
            if (next != 1) {
                if (next == 2) {
                    String name = xmlResourceParser.getName();
                    name.getClass();
                    if (!name.equals("data")) {
                        if (name.equals("category")) {
                            arrayList2.add(a(xmlResourceParser, StackTraceHelper.NAME_KEY));
                        }
                    } else {
                        arrayList.add(g(xmlResourceParser));
                    }
                } else if (next == 3 && xmlResourceParser.getName().equals("share-target")) {
                    break;
                }
            } else {
                break;
            }
        }
        if (!arrayList.isEmpty() && a10 != null && !arrayList2.isEmpty()) {
            return new a((a.C0070a[]) arrayList.toArray(new a.C0070a[arrayList.size()]), a10, (String[]) arrayList2.toArray(new String[arrayList2.size()]));
        }
        return null;
    }

    private static ArrayList e(Context context) {
        ArrayList arrayList = new ArrayList();
        Intent intent = new Intent("android.intent.action.MAIN");
        intent.addCategory("android.intent.category.LAUNCHER");
        intent.setPackage(context.getPackageName());
        List<ResolveInfo> queryIntentActivities = context.getPackageManager().queryIntentActivities(intent, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
        if (queryIntentActivities != null) {
            for (ResolveInfo resolveInfo : queryIntentActivities) {
                ActivityInfo activityInfo = resolveInfo.activityInfo;
                Bundle bundle = activityInfo.metaData;
                if (bundle != null && bundle.containsKey("android.app.shortcuts")) {
                    arrayList.addAll(f(context, activityInfo));
                }
            }
        }
        return arrayList;
    }

    private static ArrayList f(Context context, ActivityInfo activityInfo) {
        a d10;
        ArrayList arrayList = new ArrayList();
        XmlResourceParser c10 = c(context, activityInfo);
        while (true) {
            try {
                int next = c10.next();
                if (next == 1) {
                    break;
                } else if (next == 2 && c10.getName().equals("share-target") && (d10 = d(c10)) != null) {
                    arrayList.add(d10);
                }
            } catch (Exception e10) {
                Log.e("ShareTargetXmlParser", "Failed to parse the Xml resource: ", e10);
            }
        }
        c10.close();
        return arrayList;
    }

    private static a.C0070a g(XmlResourceParser xmlResourceParser) {
        return new a.C0070a(a(xmlResourceParser, "scheme"), a(xmlResourceParser, "host"), a(xmlResourceParser, "port"), a(xmlResourceParser, "path"), a(xmlResourceParser, "pathPattern"), a(xmlResourceParser, "pathPrefix"), a(xmlResourceParser, "mimeType"));
    }
}
