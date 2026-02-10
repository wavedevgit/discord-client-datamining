package com.henninghall.date_picker;

import android.util.Log;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final n f17471a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f17472a;

        static {
            int[] iArr = new int[il.b.values().length];
            f17472a = iArr;
            try {
                iArr[il.b.datetime.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f17472a[il.b.time.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f17472a[il.b.date.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(n nVar) {
        this.f17471a = nVar;
    }

    private ArrayList c() {
        String replaceAll = h.c(this.f17471a.u()).replaceAll("\\('(.+?)'\\)", "\\${$1}").replaceAll("'.+?'", "").replaceAll("\\$\\{(.+?)\\}", "('$1')");
        ArrayList arrayList = new ArrayList(Arrays.asList(il.c.values()));
        ArrayList arrayList2 = new ArrayList();
        il.c cVar = il.c.DAY;
        arrayList.remove(cVar);
        arrayList2.add(cVar);
        for (char c10 : replaceAll.toCharArray()) {
            try {
                il.c h10 = o.h(c10);
                if (arrayList.contains(h10)) {
                    arrayList.remove(h10);
                    arrayList2.add(h10);
                }
            } catch (Exception unused) {
            }
        }
        il.c cVar2 = il.c.AM_PM;
        if (arrayList.contains(cVar2)) {
            arrayList.remove(cVar2);
            arrayList2.add(cVar2);
        }
        if (!arrayList.isEmpty()) {
            Log.e(NativeRNDatePickerSpec.NAME, arrayList.size() + " wheel types cannot be ordered. Wheel type 0: " + arrayList.get(0));
        }
        return arrayList2;
    }

    public String a() {
        Calendar t10 = this.f17471a.t();
        String s10 = this.f17471a.s();
        if (t10 != null) {
            return o.b(t10);
        }
        return s10;
    }

    public ArrayList b() {
        ArrayList c10 = c();
        ArrayList e10 = e();
        ArrayList arrayList = new ArrayList();
        Iterator it = c10.iterator();
        while (it.hasNext()) {
            il.c cVar = (il.c) it.next();
            if (e10.contains(cVar)) {
                arrayList.add(cVar);
            }
        }
        return arrayList;
    }

    public int d() {
        return l.f17559a;
    }

    public ArrayList e() {
        ArrayList arrayList = new ArrayList();
        il.b z10 = this.f17471a.z();
        int i10 = a.f17472a[z10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    arrayList.add(il.c.YEAR);
                    arrayList.add(il.c.MONTH);
                    arrayList.add(il.c.DATE);
                }
            } else {
                arrayList.add(il.c.HOUR);
                arrayList.add(il.c.MINUTE);
            }
        } else {
            arrayList.add(il.c.DAY);
            arrayList.add(il.c.HOUR);
            arrayList.add(il.c.MINUTE);
        }
        if ((z10 == il.b.time || z10 == il.b.datetime) && this.f17471a.f17586o.g()) {
            arrayList.add(il.c.AM_PM);
        }
        return arrayList;
    }

    public boolean f() {
        if (this.f17471a.z() == il.b.time && !g()) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f17471a.r() == il.a.locale) {
            return h.h(this.f17471a.u());
        }
        return o.c();
    }
}
