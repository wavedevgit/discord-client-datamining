package el;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h extends g {

    /* renamed from: f  reason: collision with root package name */
    private int f22950f;

    /* renamed from: g  reason: collision with root package name */
    private int f22951g;

    public h(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f22950f = 1900;
        this.f22951g = 2100;
    }

    private int w() {
        if (this.f22945a.w() == null) {
            return this.f22951g;
        }
        return this.f22945a.w().get(1);
    }

    private int x() {
        if (this.f22945a.x() == null) {
            return this.f22950f;
        }
        return this.f22945a.x().get(1);
    }

    @Override // el.g
    public String e() {
        return com.henninghall.date_picker.h.g(this.f22945a.v());
    }

    @Override // el.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // el.g
    public ArrayList n() {
        ArrayList arrayList = new ArrayList();
        Calendar calendar = Calendar.getInstance();
        int x10 = x();
        int w10 = w() - x10;
        calendar.set(1, x10);
        for (int i10 = 0; i10 <= w10; i10++) {
            arrayList.add(h(calendar));
            calendar.add(1, 1);
        }
        return arrayList;
    }

    @Override // el.g
    public boolean u() {
        if (this.f22945a.z() == al.b.date) {
            return true;
        }
        return false;
    }

    @Override // el.g
    public boolean v() {
        return false;
    }
}
