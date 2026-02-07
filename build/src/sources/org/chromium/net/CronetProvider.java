package org.chromium.net;

import android.content.Context;
import android.util.Log;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import kv.a;
import org.chromium.net.CronetEngine;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class CronetProvider {
    private static final String GMS_CORE_CRONET_PROVIDER_CLASS = "com.google.android.gms.net.GmsCoreCronetProvider";
    private static final String JAVA_CRONET_PROVIDER_CLASS = "org.chromium.net.impl.JavaCronetProvider";
    private static final String NATIVE_CRONET_PROVIDER_CLASS = "org.chromium.net.impl.NativeCronetProvider";
    private static final String PLAY_SERVICES_CRONET_PROVIDER_CLASS = "com.google.android.gms.net.PlayServicesCronetProvider";
    public static final String PROVIDER_NAME_APP_PACKAGED = "App-Packaged-Cronet-Provider";
    public static final String PROVIDER_NAME_FALLBACK = "Fallback-Cronet-Provider";
    private static final String RES_KEY_CRONET_IMPL_CLASS = "CronetProviderClassName";
    private static final String TAG = "CronetProvider";
    protected final Context mContext;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public CronetProvider f43426a;

        /* renamed from: b  reason: collision with root package name */
        public a.b f43427b;

        a() {
        }

        public boolean equals(Object obj) {
            if ((obj instanceof a) && this.f43426a.equals(((a) obj).f43426a)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return this.f43426a.hashCode();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public CronetProvider(Context context) {
        if (context != null) {
            this.mContext = context;
            return;
        }
        throw new IllegalArgumentException("Context must not be null");
    }

    private static boolean addCronetProviderFromResourceFile(Context context, a.b bVar, Set<a> set) {
        int identifier = context.getResources().getIdentifier(RES_KEY_CRONET_IMPL_CLASS, InquiryField.StringField.TYPE, context.getPackageName());
        boolean z10 = false;
        if (identifier == 0) {
            return false;
        }
        String string = context.getString(identifier);
        if (string != null && !string.equals(PLAY_SERVICES_CRONET_PROVIDER_CLASS) && !string.equals(GMS_CORE_CRONET_PROVIDER_CLASS) && !string.equals(JAVA_CRONET_PROVIDER_CLASS) && !string.equals(NATIVE_CRONET_PROVIDER_CLASS)) {
            z10 = true;
            if (!addCronetProviderImplByClassName(context, string, bVar, set, true)) {
                String str = TAG;
                Log.e(str, "Unable to instantiate Cronet implementation class " + string + " that is listed as in the app string resource file under CronetProviderClassName key");
            }
        }
        return z10;
    }

    private static boolean addCronetProviderImplByClassName(Context context, String str, a.b bVar, Set<a> set, boolean z10) {
        try {
            Constructor constructor = context.getClassLoader().loadClass(str).asSubclass(CronetProvider.class).getConstructor(Context.class);
            a aVar = new a();
            aVar.f43426a = (CronetProvider) constructor.newInstance(context);
            aVar.f43427b = bVar;
            set.add(aVar);
            return true;
        } catch (ClassNotFoundException e10) {
            logReflectiveOperationException(str, z10, e10);
            return false;
        } catch (IllegalAccessException e11) {
            logReflectiveOperationException(str, z10, e11);
            return false;
        } catch (InstantiationException e12) {
            logReflectiveOperationException(str, z10, e12);
            return false;
        } catch (NoSuchMethodException e13) {
            logReflectiveOperationException(str, z10, e13);
            return false;
        } catch (InvocationTargetException e14) {
            logReflectiveOperationException(str, z10, e14);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static List<a> getAllProviderInfos(Context context) {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        addCronetProviderFromResourceFile(context, a.b.CRONET_SOURCE_UNSPECIFIED, linkedHashSet);
        a.b bVar = a.b.CRONET_SOURCE_PLAY_SERVICES;
        addCronetProviderImplByClassName(context, PLAY_SERVICES_CRONET_PROVIDER_CLASS, bVar, linkedHashSet, false);
        addCronetProviderImplByClassName(context, GMS_CORE_CRONET_PROVIDER_CLASS, bVar, linkedHashSet, false);
        addCronetProviderImplByClassName(context, NATIVE_CRONET_PROVIDER_CLASS, a.b.CRONET_SOURCE_STATICALLY_LINKED, linkedHashSet, false);
        addCronetProviderImplByClassName(context, JAVA_CRONET_PROVIDER_CLASS, a.b.CRONET_SOURCE_FALLBACK, linkedHashSet, false);
        return Collections.unmodifiableList(new ArrayList(linkedHashSet));
    }

    public static List<CronetProvider> getAllProviders(Context context) {
        ArrayList arrayList = new ArrayList();
        for (a aVar : getAllProviderInfos(context)) {
            arrayList.add(aVar.f43426a);
        }
        return Collections.unmodifiableList(arrayList);
    }

    private static void logReflectiveOperationException(String str, boolean z10, Exception exc) {
        if (z10) {
            String str2 = TAG;
            Log.e(str2, "Unable to load provider class: " + str, exc);
            return;
        }
        String str3 = TAG;
        if (Log.isLoggable(str3, 3)) {
            Log.d(str3, "Tried to load " + str + " provider class but it wasn't included in the app classpath");
        }
    }

    public abstract CronetEngine.Builder createBuilder();

    public abstract String getName();

    public abstract String getVersion();

    public abstract boolean isEnabled();

    public String toString() {
        String name = getClass().getName();
        String name2 = getName();
        String version = getVersion();
        boolean isEnabled = isEnabled();
        return "[class=" + name + ", name=" + name2 + ", version=" + version + ", enabled=" + isEnabled + "]";
    }
}
