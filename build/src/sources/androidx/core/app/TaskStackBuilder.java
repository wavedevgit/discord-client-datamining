package androidx.core.app;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import java.util.ArrayList;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TaskStackBuilder implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f3065d = new ArrayList();

    /* renamed from: e  reason: collision with root package name */
    private final Context f3066e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        Intent getSupportParentActivityIntent();
    }

    private TaskStackBuilder(Context context) {
        this.f3066e = context;
    }

    public static TaskStackBuilder e(Context context) {
        return new TaskStackBuilder(context);
    }

    public TaskStackBuilder b(Intent intent) {
        this.f3065d.add(intent);
        return this;
    }

    public TaskStackBuilder c(Activity activity) {
        Intent intent;
        if (activity instanceof a) {
            intent = ((a) activity).getSupportParentActivityIntent();
        } else {
            intent = null;
        }
        if (intent == null) {
            intent = i.a(activity);
        }
        if (intent != null) {
            ComponentName component = intent.getComponent();
            if (component == null) {
                component = intent.resolveActivity(this.f3066e.getPackageManager());
            }
            d(component);
            b(intent);
        }
        return this;
    }

    public TaskStackBuilder d(ComponentName componentName) {
        int size = this.f3065d.size();
        try {
            Intent b10 = i.b(this.f3066e, componentName);
            while (b10 != null) {
                this.f3065d.add(size, b10);
                b10 = i.b(this.f3066e, b10.getComponent());
            }
            return this;
        } catch (PackageManager.NameNotFoundException e10) {
            Log.e("TaskStackBuilder", "Bad ComponentName while traversing activity parent metadata");
            throw new IllegalArgumentException(e10);
        }
    }

    public void f() {
        g(null);
    }

    public void g(Bundle bundle) {
        if (!this.f3065d.isEmpty()) {
            Intent[] intentArr = (Intent[]) this.f3065d.toArray(new Intent[0]);
            intentArr[0] = new Intent(intentArr[0]).addFlags(268484608);
            if (!androidx.core.content.a.n(this.f3066e, intentArr, bundle)) {
                Intent intent = new Intent(intentArr[intentArr.length - 1]);
                intent.addFlags(268435456);
                this.f3066e.startActivity(intent);
                return;
            }
            return;
        }
        throw new IllegalStateException("No intents added to TaskStackBuilder; cannot startActivities");
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return this.f3065d.iterator();
    }
}
