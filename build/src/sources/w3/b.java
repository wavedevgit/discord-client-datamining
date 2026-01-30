package w3;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;
import android.util.Xml;
import androidx.core.content.pm.ShortcutInfoCompat;
import com.facebook.react.devsupport.StackTraceHelper;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlSerializer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class b {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final String f52224a;

        /* renamed from: b  reason: collision with root package name */
        final String f52225b;

        /* renamed from: c  reason: collision with root package name */
        final ShortcutInfoCompat f52226c;

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(ShortcutInfoCompat shortcutInfoCompat, String str, String str2) {
            this.f52226c = shortcutInfoCompat;
            this.f52224a = str;
            this.f52225b = str2;
        }
    }

    private static String a(XmlPullParser xmlPullParser, String str) {
        String attributeValue = xmlPullParser.getAttributeValue("http://schemas.android.com/apk/res/android", str);
        if (attributeValue == null) {
            return xmlPullParser.getAttributeValue(null, str);
        }
        return attributeValue;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Map b(File file, Context context) {
        a e10;
        ShortcutInfoCompat shortcutInfoCompat;
        u0.a aVar = new u0.a();
        try {
            FileInputStream fileInputStream = new FileInputStream(file);
            if (file.exists()) {
                XmlPullParser newPullParser = Xml.newPullParser();
                newPullParser.setInput(fileInputStream, "UTF_8");
                while (true) {
                    int next = newPullParser.next();
                    if (next == 1) {
                        break;
                    } else if (next == 2 && newPullParser.getName().equals("target") && (e10 = e(newPullParser, context)) != null && (shortcutInfoCompat = e10.f52226c) != null) {
                        aVar.put(shortcutInfoCompat.g(), e10);
                    }
                }
            }
            fileInputStream.close();
            return aVar;
        } catch (Exception e11) {
            file.delete();
            Log.e("ShortcutInfoCompatSaver", "Failed to load saved values from file " + file.getAbsolutePath() + ". Old state removed, new added", e11);
            return aVar;
        }
    }

    private static ComponentName c(XmlPullParser xmlPullParser) {
        String a10 = a(xmlPullParser, "component");
        if (TextUtils.isEmpty(a10)) {
            return null;
        }
        return ComponentName.unflattenFromString(a10);
    }

    private static Intent d(XmlPullParser xmlPullParser) {
        String a10 = a(xmlPullParser, "action");
        String a11 = a(xmlPullParser, "targetPackage");
        String a12 = a(xmlPullParser, "targetClass");
        if (a10 == null) {
            return null;
        }
        Intent intent = new Intent(a10);
        if (!TextUtils.isEmpty(a11) && !TextUtils.isEmpty(a12)) {
            intent.setClassName(a11, a12);
        }
        return intent;
    }

    private static a e(XmlPullParser xmlPullParser, Context context) {
        if (!xmlPullParser.getName().equals("target")) {
            return null;
        }
        String a10 = a(xmlPullParser, StackTraceHelper.ID_KEY);
        String a11 = a(xmlPullParser, "short_label");
        if (TextUtils.isEmpty(a10) || TextUtils.isEmpty(a11)) {
            return null;
        }
        int parseInt = Integer.parseInt(a(xmlPullParser, "rank"));
        String a12 = a(xmlPullParser, "long_label");
        String a13 = a(xmlPullParser, "disabled_message");
        ComponentName c10 = c(xmlPullParser);
        String a14 = a(xmlPullParser, "icon_resource_name");
        String a15 = a(xmlPullParser, "icon_bitmap_path");
        ArrayList arrayList = new ArrayList();
        HashSet hashSet = new HashSet();
        while (true) {
            int next = xmlPullParser.next();
            if (next != 1) {
                if (next == 2) {
                    String name = xmlPullParser.getName();
                    name.getClass();
                    if (!name.equals("intent")) {
                        if (name.equals("categories")) {
                            String a16 = a(xmlPullParser, StackTraceHelper.NAME_KEY);
                            if (!TextUtils.isEmpty(a16)) {
                                hashSet.add(a16);
                            }
                        }
                    } else {
                        Intent d10 = d(xmlPullParser);
                        if (d10 != null) {
                            arrayList.add(d10);
                        }
                    }
                } else if (next == 3 && xmlPullParser.getName().equals("target")) {
                    break;
                }
            } else {
                break;
            }
        }
        ShortcutInfoCompat.b l10 = new ShortcutInfoCompat.b(context, a10).m(a11).l(parseInt);
        if (!TextUtils.isEmpty(a12)) {
            l10.i(a12);
        }
        if (!TextUtils.isEmpty(a13)) {
            l10.d(a13);
        }
        if (c10 != null) {
            l10.b(c10);
        }
        if (!arrayList.isEmpty()) {
            l10.g((Intent[]) arrayList.toArray(new Intent[0]));
        }
        if (!hashSet.isEmpty()) {
            l10.c(hashSet);
        }
        return new a(l10.a(), a14, a15);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(List list, File file) {
        FileOutputStream e10;
        b2.a aVar = new b2.a(file);
        FileOutputStream fileOutputStream = null;
        try {
            e10 = aVar.e();
        } catch (Exception e11) {
            e = e11;
        }
        try {
            BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(e10);
            XmlSerializer newSerializer = Xml.newSerializer();
            newSerializer.setOutput(bufferedOutputStream, "UTF_8");
            newSerializer.startDocument(null, Boolean.TRUE);
            newSerializer.startTag(null, "share_targets");
            Iterator it = list.iterator();
            while (it.hasNext()) {
                j(newSerializer, (a) it.next());
            }
            newSerializer.endTag(null, "share_targets");
            newSerializer.endDocument();
            bufferedOutputStream.flush();
            e10.flush();
            aVar.b(e10);
        } catch (Exception e12) {
            e = e12;
            fileOutputStream = e10;
            Log.e("ShortcutInfoCompatSaver", "Failed to write to file " + aVar.c(), e);
            aVar.a(fileOutputStream);
            throw new RuntimeException("Failed to write to file " + aVar.c(), e);
        }
    }

    private static void g(XmlSerializer xmlSerializer, String str, String str2) {
        if (TextUtils.isEmpty(str2)) {
            return;
        }
        xmlSerializer.attribute(null, str, str2);
    }

    private static void h(XmlSerializer xmlSerializer, String str) {
        if (TextUtils.isEmpty(str)) {
            return;
        }
        xmlSerializer.startTag(null, "categories");
        g(xmlSerializer, StackTraceHelper.NAME_KEY, str);
        xmlSerializer.endTag(null, "categories");
    }

    private static void i(XmlSerializer xmlSerializer, Intent intent) {
        xmlSerializer.startTag(null, "intent");
        g(xmlSerializer, "action", intent.getAction());
        if (intent.getComponent() != null) {
            g(xmlSerializer, "targetPackage", intent.getComponent().getPackageName());
            g(xmlSerializer, "targetClass", intent.getComponent().getClassName());
        }
        xmlSerializer.endTag(null, "intent");
    }

    private static void j(XmlSerializer xmlSerializer, a aVar) {
        xmlSerializer.startTag(null, "target");
        ShortcutInfoCompat shortcutInfoCompat = aVar.f52226c;
        g(xmlSerializer, StackTraceHelper.ID_KEY, shortcutInfoCompat.g());
        g(xmlSerializer, "short_label", shortcutInfoCompat.o().toString());
        g(xmlSerializer, "rank", Integer.toString(shortcutInfoCompat.n()));
        if (!TextUtils.isEmpty(shortcutInfoCompat.l())) {
            g(xmlSerializer, "long_label", shortcutInfoCompat.l().toString());
        }
        if (!TextUtils.isEmpty(shortcutInfoCompat.e())) {
            g(xmlSerializer, "disabled_message", shortcutInfoCompat.e().toString());
        }
        if (shortcutInfoCompat.c() != null) {
            g(xmlSerializer, "component", shortcutInfoCompat.c().flattenToString());
        }
        if (!TextUtils.isEmpty(aVar.f52224a)) {
            g(xmlSerializer, "icon_resource_name", aVar.f52224a);
        }
        if (!TextUtils.isEmpty(aVar.f52225b)) {
            g(xmlSerializer, "icon_bitmap_path", aVar.f52225b);
        }
        for (Intent intent : shortcutInfoCompat.i()) {
            i(xmlSerializer, intent);
        }
        for (String str : shortcutInfoCompat.d()) {
            h(xmlSerializer, str);
        }
        xmlSerializer.endTag(null, "target");
    }
}
