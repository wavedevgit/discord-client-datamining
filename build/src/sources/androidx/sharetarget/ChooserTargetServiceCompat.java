package androidx.sharetarget;

import android.content.ComponentName;
import android.content.Context;
import android.content.IntentFilter;
import android.graphics.drawable.Icon;
import android.os.Bundle;
import android.service.chooser.ChooserTarget;
import android.service.chooser.ChooserTargetService;
import android.util.Log;
import androidx.core.content.pm.ShortcutInfoCompat;
import androidx.core.graphics.drawable.IconCompat;
import androidx.sharetarget.a;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ChooserTargetServiceCompat extends ChooserTargetService {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements Comparable {

        /* renamed from: d  reason: collision with root package name */
        private final ShortcutInfoCompat f5507d;

        /* renamed from: e  reason: collision with root package name */
        private final ComponentName f5508e;

        a(ShortcutInfoCompat shortcutInfoCompat, ComponentName componentName) {
            this.f5507d = shortcutInfoCompat;
            this.f5508e = componentName;
        }

        @Override // java.lang.Comparable
        /* renamed from: a */
        public int compareTo(a aVar) {
            return d().n() - aVar.d().n();
        }

        ShortcutInfoCompat d() {
            return this.f5507d;
        }

        ComponentName e() {
            return this.f5508e;
        }
    }

    static List a(w3.a aVar, List list) {
        IconCompat iconCompat;
        if (list.isEmpty()) {
            return new ArrayList();
        }
        Collections.sort(list);
        ArrayList arrayList = new ArrayList();
        int n10 = ((a) list.get(0)).d().n();
        Iterator it = list.iterator();
        float f10 = 1.0f;
        int i10 = n10;
        while (it.hasNext()) {
            a aVar2 = (a) it.next();
            ShortcutInfoCompat d10 = aVar2.d();
            Icon icon = null;
            try {
                iconCompat = aVar.k(d10.g());
            } catch (Exception e10) {
                Log.e("ChooserServiceCompat", "Failed to retrieve shortcut icon: ", e10);
                iconCompat = null;
            }
            Bundle bundle = new Bundle();
            bundle.putString("android.intent.extra.shortcut.ID", d10.g());
            if (i10 != d10.n()) {
                f10 -= 0.01f;
                i10 = d10.n();
            }
            float f11 = f10;
            CharSequence o10 = d10.o();
            if (iconCompat != null) {
                icon = iconCompat.v();
            }
            arrayList.add(new ChooserTarget(o10, icon, f11, aVar2.e(), bundle));
            f10 = f11;
        }
        return arrayList;
    }

    @Override // android.service.chooser.ChooserTargetService
    public List onGetChooserTargets(ComponentName componentName, IntentFilter intentFilter) {
        Context applicationContext = getApplicationContext();
        ArrayList<androidx.sharetarget.a> b10 = b.b(applicationContext);
        ArrayList arrayList = new ArrayList();
        for (androidx.sharetarget.a aVar : b10) {
            if (aVar.f5510b.equals(componentName.getClassName())) {
                a.C0068a[] c0068aArr = aVar.f5509a;
                int length = c0068aArr.length;
                int i10 = 0;
                while (true) {
                    if (i10 >= length) {
                        break;
                    } else if (intentFilter.hasDataType(c0068aArr[i10].f5518g)) {
                        arrayList.add(aVar);
                        break;
                    } else {
                        i10++;
                    }
                }
            }
        }
        if (arrayList.isEmpty()) {
            return Collections.EMPTY_LIST;
        }
        w3.a j10 = w3.a.j(applicationContext);
        try {
            List<ShortcutInfoCompat> b11 = j10.b();
            if (b11 != null && !b11.isEmpty()) {
                ArrayList arrayList2 = new ArrayList();
                for (ShortcutInfoCompat shortcutInfoCompat : b11) {
                    Iterator it = arrayList.iterator();
                    while (true) {
                        if (it.hasNext()) {
                            androidx.sharetarget.a aVar2 = (androidx.sharetarget.a) it.next();
                            if (shortcutInfoCompat.d().containsAll(Arrays.asList(aVar2.f5511c))) {
                                arrayList2.add(new a(shortcutInfoCompat, new ComponentName(applicationContext.getPackageName(), aVar2.f5510b)));
                                break;
                            }
                        }
                    }
                }
                return a(j10, arrayList2);
            }
            return Collections.EMPTY_LIST;
        } catch (Exception e10) {
            Log.e("ChooserServiceCompat", "Failed to retrieve shortcuts: ", e10);
            return Collections.EMPTY_LIST;
        }
    }
}
