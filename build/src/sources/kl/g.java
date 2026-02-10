package kl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {

    /* renamed from: a  reason: collision with root package name */
    protected final n f30943a;

    /* renamed from: b  reason: collision with root package name */
    private Calendar f30944b;

    /* renamed from: c  reason: collision with root package name */
    private ArrayList f30945c = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    public com.henninghall.date_picker.pickers.a f30946d;

    /* renamed from: e  reason: collision with root package name */
    public SimpleDateFormat f30947e;

    public g(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        this.f30943a = nVar;
        this.f30946d = aVar;
        this.f30947e = new SimpleDateFormat(e(), nVar.u());
        aVar.setTextAlign(k());
        aVar.setWrapSelectorWheel(v());
    }

    private String[] c(ArrayList arrayList) {
        ArrayList arrayList2 = new ArrayList();
        Iterator it = arrayList.iterator();
        while (it.hasNext()) {
            arrayList2.add(s((String) it.next()));
        }
        return (String[]) arrayList2.toArray(new String[0]);
    }

    private SimpleDateFormat d(Locale locale) {
        return new SimpleDateFormat(e(), locale);
    }

    private int f() {
        return this.f30946d.getValue();
    }

    private int g(Calendar calendar) {
        this.f30947e.setTimeZone(this.f30943a.D());
        return this.f30945c.indexOf(this.f30947e.format(calendar.getTime()));
    }

    private String j(Calendar calendar, Locale locale) {
        return d(locale).format(calendar.getTime());
    }

    private void o() {
        this.f30946d.setMinValue(0);
        this.f30946d.setMaxValue(0);
        ArrayList n10 = n();
        this.f30945c = n10;
        this.f30946d.setDisplayedValues(c(n10));
        this.f30946d.setMaxValue(this.f30945c.size() - 1);
    }

    public void a(Calendar calendar) {
        this.f30946d.b(g(calendar));
    }

    public String b() {
        return s(m(f()));
    }

    public abstract String e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public String h(Calendar calendar) {
        return j(calendar, this.f30943a.u());
    }

    public String i(int i10) {
        if (!u()) {
            return this.f30947e.format(this.f30944b.getTime());
        }
        int size = this.f30945c.size();
        return m(((f() + size) - i10) % size);
    }

    public abstract Paint.Align k();

    public String l() {
        if (!u()) {
            return this.f30947e.format(this.f30944b.getTime());
        }
        return m(f());
    }

    public String m(int i10) {
        return (String) this.f30945c.get(i10);
    }

    public abstract ArrayList n();

    public void p() {
        this.f30947e = new SimpleDateFormat(e(), this.f30943a.u());
        if (!u()) {
            return;
        }
        o();
    }

    public void q(String str) {
        this.f30946d.setDividerColor(str);
    }

    public void r(Calendar calendar) {
        this.f30947e.setTimeZone(this.f30943a.D());
        this.f30944b = calendar;
        int g10 = g(calendar);
        if (g10 > -1) {
            if (this.f30946d.getValue() == 0) {
                this.f30946d.setValue(g10);
            } else {
                this.f30946d.b(g10);
            }
        }
    }

    public void t() {
        int i10;
        if (u()) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        this.f30946d.setVisibility(i10);
    }

    public abstract boolean u();

    public abstract boolean v();

    public String s(String str) {
        return str;
    }
}
