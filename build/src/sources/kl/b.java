package kl;

import android.view.View;
import android.widget.LinearLayout;
import com.henninghall.date_picker.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: a  reason: collision with root package name */
    private final LinearLayout f31884a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(View view) {
        LinearLayout linearLayout = (LinearLayout) view.findViewById(k.f17558h);
        this.f31884a = linearLayout;
        linearLayout.setWillNotDraw(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(View view) {
        this.f31884a.addView(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f31884a.removeAllViews();
    }
}
