package ml;

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
    protected final n f37113a;

    /* renamed from: b  reason: collision with root package name */
    private Calendar f37114b;

    /* renamed from: c  reason: collision with root package name */
    private ArrayList f37115c = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    public com.henninghall.date_picker.pickers.a f37116d;

    /* renamed from: e  reason: collision with root package name */
    public SimpleDateFormat f37117e;

    public g(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        this.f37113a = nVar;
        this.f37116d = aVar;
        this.f37117e = new SimpleDateFormat(e(), nVar.u());
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
        return this.f37116d.getValue();
    }

    private int g(Calendar calendar) {
        this.f37117e.setTimeZone(this.f37113a.D());
        return this.f37115c.indexOf(this.f37117e.format(calendar.getTime()));
    }

    private String j(Calendar calendar, Locale locale) {
        return d(locale).format(calendar.getTime());
    }

    private void o() {
        this.f37116d.setMinValue(0);
        this.f37116d.setMaxValue(0);
        ArrayList n10 = n();
        this.f37115c = n10;
        this.f37116d.setDisplayedValues(c(n10));
        this.f37116d.setMaxValue(this.f37115c.size() - 1);
    }

    public void a(Calendar calendar) {
        this.f37116d.b(g(calendar));
    }

    public String b() {
        return s(m(f()));
    }

    public abstract String e();

    /* JADX INFO: Access modifiers changed from: package-private */
    public String h(Calendar calendar) {
        return j(calendar, this.f37113a.u());
    }

    public String i(int i10) {
        if (!u()) {
            return this.f37117e.format(this.f37114b.getTime());
        }
        int size = this.f37115c.size();
        return m(((f() + size) - i10) % size);
    }

    public abstract Paint.Align k();

    public String l() {
        if (!u()) {
            return this.f37117e.format(this.f37114b.getTime());
        }
        return m(f());
    }

    public String m(int i10) {
        return (String) this.f37115c.get(i10);
    }

    public abstract ArrayList n();

    public void p() {
        this.f37117e = new SimpleDateFormat(e(), this.f37113a.u());
        if (!u()) {
            return;
        }
        o();
    }

    public void q(String str) {
        this.f37116d.setDividerColor(str);
    }

    public void r(Calendar calendar) {
        this.f37117e.setTimeZone(this.f37113a.D());
        this.f37114b = calendar;
        int g10 = g(calendar);
        if (g10 > -1) {
            if (this.f37116d.getValue() == 0) {
                this.f37116d.setValue(g10);
            } else {
                this.f37116d.b(g10);
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
        this.f37116d.setVisibility(i10);
    }

    public abstract boolean u();

    public abstract boolean v();

    public String s(String str) {
        return str;
    }
}
