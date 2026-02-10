package com.reactnativecommunity.slider;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.os.Build;
import android.util.AttributeSet;
import android.util.Log;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityManager;
import androidx.appcompat.widget.t;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import java.net.URL;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends t {

    /* renamed from: y  reason: collision with root package name */
    private static int f17538y = 128;

    /* renamed from: e  reason: collision with root package name */
    private double f17539e;

    /* renamed from: i  reason: collision with root package name */
    private double f17540i;

    /* renamed from: o  reason: collision with root package name */
    private double f17541o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f17542p;

    /* renamed from: q  reason: collision with root package name */
    private double f17543q;

    /* renamed from: r  reason: collision with root package name */
    private double f17544r;

    /* renamed from: s  reason: collision with root package name */
    private String f17545s;

    /* renamed from: t  reason: collision with root package name */
    private List f17546t;

    /* renamed from: u  reason: collision with root package name */
    private double f17547u;

    /* renamed from: v  reason: collision with root package name */
    private int f17548v;

    /* renamed from: w  reason: collision with root package name */
    private double f17549w;

    /* renamed from: x  reason: collision with root package name */
    private int f17550x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.reactnativecommunity.slider.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0232a extends TimerTask {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ AccessibilityManager f17551d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AccessibilityEvent f17552e;

        C0232a(AccessibilityManager accessibilityManager, AccessibilityEvent accessibilityEvent) {
            this.f17551d = accessibilityManager;
            this.f17552e = accessibilityEvent;
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            this.f17551d.sendAccessibilityEvent(this.f17552e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f17554d;

        b(String str) {
            this.f17554d = str;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public BitmapDrawable call() {
            Bitmap decodeStream;
            try {
                if (!this.f17554d.startsWith("http://") && !this.f17554d.startsWith("https://") && !this.f17554d.startsWith("file://") && !this.f17554d.startsWith("asset://") && !this.f17554d.startsWith("data:")) {
                    decodeStream = BitmapFactory.decodeResource(a.this.getResources(), a.this.getResources().getIdentifier(this.f17554d, "drawable", a.this.getContext().getPackageName()));
                    return new BitmapDrawable(a.this.getResources(), decodeStream);
                }
                decodeStream = BitmapFactory.decodeStream(new URL(this.f17554d).openStream());
                return new BitmapDrawable(a.this.getResources(), decodeStream);
            } catch (Exception e10) {
                e10.printStackTrace();
                return null;
            }
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f17539e = 0.0d;
        this.f17540i = 0.0d;
        this.f17541o = 0.0d;
        this.f17542p = false;
        this.f17543q = 0.0d;
        this.f17544r = 0.0d;
        this.f17547u = -9.223372036854776E18d;
        this.f17549w = 9.223372036854776E18d;
        super.setLayoutDirection(I18nUtil.getInstance().isRTL(context) ? 1 : 0);
        a();
    }

    private void a() {
        if (Build.VERSION.SDK_INT < 26) {
            super.setStateListAnimator(null);
        }
    }

    private BitmapDrawable b(String str) {
        try {
            return (BitmapDrawable) Executors.newSingleThreadExecutor().submit(new b(str)).get();
        } catch (Exception e10) {
            e10.printStackTrace();
            return null;
        }
    }

    private void g() {
        if (this.f17543q == 0.0d) {
            this.f17544r = (this.f17540i - this.f17539e) / f17538y;
        }
        setMax(getTotalSteps());
        setKeyProgressIncrement(1);
        h();
        i();
        j();
    }

    private double getStepValue() {
        double d10 = this.f17543q;
        if (d10 > 0.0d) {
            return d10;
        }
        return this.f17544r;
    }

    private int getTotalSteps() {
        return (int) Math.ceil((this.f17540i - this.f17539e) / getStepValue());
    }

    private void h() {
        double max = Math.max(this.f17547u, this.f17539e);
        double d10 = this.f17539e;
        int round = (int) Math.round(((max - d10) / (this.f17540i - d10)) * getTotalSteps());
        int i10 = this.f17550x;
        if (round > i10) {
            Log.d("Invalid configuration", "upperLimit < lowerLimit; lowerLimit not set");
        } else {
            this.f17548v = Math.min(round, i10);
        }
    }

    private void i() {
        double min = Math.min(this.f17549w, this.f17540i);
        double d10 = this.f17539e;
        int round = (int) Math.round(((min - d10) / (this.f17540i - d10)) * getTotalSteps());
        if (this.f17548v > round) {
            Log.d("Invalid configuration", "upperLimit < lowerLimit; upperLimit not set");
        } else {
            this.f17550x = round;
        }
    }

    private void j() {
        double d10 = this.f17541o;
        double d11 = this.f17539e;
        setProgress((int) Math.round(((d10 - d11) / (this.f17540i - d11)) * getTotalSteps()));
    }

    @Override // android.view.View
    public void announceForAccessibility(CharSequence charSequence) {
        Context context = getContext();
        AccessibilityManager accessibilityManager = (AccessibilityManager) context.getSystemService("accessibility");
        if (accessibilityManager.isEnabled()) {
            AccessibilityEvent obtain = AccessibilityEvent.obtain();
            obtain.setEventType(16384);
            obtain.setClassName(getClass().getName());
            obtain.setPackageName(context.getPackageName());
            obtain.getText().add(charSequence);
            new Timer().schedule(new C0232a(accessibilityManager, obtain), 1000L);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int c(int i10) {
        if (i10 < getLowerLimit()) {
            return getLowerLimit();
        }
        if (i10 > getUpperLimit()) {
            return getUpperLimit();
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(boolean z10) {
        this.f17542p = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f17542p;
    }

    public double f(int i10) {
        if (i10 == getMax()) {
            return this.f17540i;
        }
        return (i10 * getStepValue()) + this.f17539e;
    }

    int getLowerLimit() {
        return this.f17548v;
    }

    int getUpperLimit() {
        return this.f17550x;
    }

    @Override // android.view.View
    public void onPopulateAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onPopulateAccessibilityEvent(accessibilityEvent);
        if (accessibilityEvent.getEventType() != 32768 && (accessibilityEvent.getEventType() != 4 || !isAccessibilityFocused())) {
            return;
        }
        setupAccessibility((int) this.f17541o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAccessibilityIncrements(List<String> list) {
        this.f17546t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAccessibilityUnits(String str) {
        this.f17545s = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setLowerLimit(double d10) {
        this.f17547u = d10;
        h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setMaxValue(double d10) {
        this.f17540i = d10;
        g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setMinValue(double d10) {
        this.f17539e = d10;
        g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setStep(double d10) {
        this.f17543q = d10;
        g();
    }

    public void setThumbImage(String str) {
        if (str != null) {
            setThumb(b(str));
            setSplitTrack(false);
            return;
        }
        setThumb(getThumb());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setUpperLimit(double d10) {
        this.f17549w = d10;
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setValue(double d10) {
        this.f17541o = d10;
        j();
    }

    public void setupAccessibility(int i10) {
        List list;
        if (this.f17545s != null && (list = this.f17546t) != null && list.size() - 1 == ((int) this.f17540i)) {
            String str = (String) this.f17546t.get(i10);
            int length = this.f17545s.length();
            String str2 = this.f17545s;
            if (str != null && Integer.parseInt(str) == 1) {
                str2 = str2.substring(0, length - 1);
            }
            announceForAccessibility(String.format("%s %s", str, str2));
        }
    }
}
