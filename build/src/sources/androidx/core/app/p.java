package androidx.core.app;

import android.app.PendingIntent;
import android.os.Bundle;
import android.os.Parcelable;
import androidx.core.app.NotificationCompat;
import androidx.core.graphics.drawable.IconCompat;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f3232a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static final Object f3233b = new Object();

    private static RemoteInput a(Bundle bundle) {
        ArrayList<String> stringArrayList = bundle.getStringArrayList("allowedDataTypes");
        HashSet hashSet = new HashSet();
        if (stringArrayList != null) {
            Iterator<String> it = stringArrayList.iterator();
            while (it.hasNext()) {
                hashSet.add(it.next());
            }
        }
        return new RemoteInput(bundle.getString("resultKey"), bundle.getCharSequence("label"), bundle.getCharSequenceArray(InquiryField.ChoicesField.TYPE), bundle.getBoolean("allowFreeFormInput"), 0, bundle.getBundle("extras"), hashSet);
    }

    private static RemoteInput[] b(Bundle[] bundleArr) {
        if (bundleArr == null) {
            return null;
        }
        RemoteInput[] remoteInputArr = new RemoteInput[bundleArr.length];
        for (int i10 = 0; i10 < bundleArr.length; i10++) {
            remoteInputArr[i10] = a(bundleArr[i10]);
        }
        return remoteInputArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static NotificationCompat.Action c(Bundle bundle) {
        Bundle bundle2 = bundle.getBundle("extras");
        boolean z10 = false;
        if (bundle2 != null) {
            z10 = bundle2.getBoolean("android.support.allowGeneratedReplies", false);
        }
        return new NotificationCompat.Action(bundle.getInt("icon"), bundle.getCharSequence("title"), (PendingIntent) bundle.getParcelable("actionIntent"), bundle.getBundle("extras"), b(d(bundle, "remoteInputs")), b(d(bundle, "dataOnlyRemoteInputs")), z10, bundle.getInt("semanticAction"), bundle.getBoolean("showsUserInterface"), false, false);
    }

    private static Bundle[] d(Bundle bundle, String str) {
        Parcelable[] parcelableArray = bundle.getParcelableArray(str);
        if (!(parcelableArray instanceof Bundle[]) && parcelableArray != null) {
            Bundle[] bundleArr = (Bundle[]) Arrays.copyOf(parcelableArray, parcelableArray.length, Bundle[].class);
            bundle.putParcelableArray(str, bundleArr);
            return bundleArr;
        }
        return (Bundle[]) parcelableArray;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Bundle e(NotificationCompat.Action action) {
        int i10;
        Bundle bundle;
        Bundle bundle2 = new Bundle();
        IconCompat d10 = action.d();
        if (d10 != null) {
            i10 = d10.n();
        } else {
            i10 = 0;
        }
        bundle2.putInt("icon", i10);
        bundle2.putCharSequence("title", action.h());
        bundle2.putParcelable("actionIntent", action.a());
        if (action.c() != null) {
            bundle = new Bundle(action.c());
        } else {
            bundle = new Bundle();
        }
        bundle.putBoolean("android.support.allowGeneratedReplies", action.b());
        bundle2.putBundle("extras", bundle);
        bundle2.putParcelableArray("remoteInputs", g(action.e()));
        bundle2.putBoolean("showsUserInterface", action.g());
        bundle2.putInt("semanticAction", action.f());
        return bundle2;
    }

    private static Bundle f(RemoteInput remoteInput) {
        Bundle bundle = new Bundle();
        bundle.putString("resultKey", remoteInput.j());
        bundle.putCharSequence("label", remoteInput.i());
        bundle.putCharSequenceArray(InquiryField.ChoicesField.TYPE, remoteInput.f());
        bundle.putBoolean("allowFreeFormInput", remoteInput.d());
        bundle.putBundle("extras", remoteInput.h());
        Set<String> e10 = remoteInput.e();
        if (e10 != null && !e10.isEmpty()) {
            ArrayList<String> arrayList = new ArrayList<>(e10.size());
            for (String str : e10) {
                arrayList.add(str);
            }
            bundle.putStringArrayList("allowedDataTypes", arrayList);
        }
        return bundle;
    }

    private static Bundle[] g(RemoteInput[] remoteInputArr) {
        if (remoteInputArr == null) {
            return null;
        }
        Bundle[] bundleArr = new Bundle[remoteInputArr.length];
        for (int i10 = 0; i10 < remoteInputArr.length; i10++) {
            bundleArr[i10] = f(remoteInputArr[i10]);
        }
        return bundleArr;
    }
}
