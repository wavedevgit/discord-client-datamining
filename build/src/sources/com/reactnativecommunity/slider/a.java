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
    private static int f17418y = 128;

    /* renamed from: e  reason: collision with root package name */
    private double f17419e;

    /* renamed from: i  reason: collision with root package name */
    private double f17420i;

    /* renamed from: o  reason: collision with root package name */
    private double f17421o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f17422p;

    /* renamed from: q  reason: collision with root package name */
    private double f17423q;

    /* renamed from: r  reason: collision with root package name */
    private double f17424r;

    /* renamed from: s  reason: collision with root package name */
    private String f17425s;

    /* renamed from: t  reason: collision with root package name */
    private List f17426t;

    /* renamed from: u  reason: collision with root package name */
    private double f17427u;

    /* renamed from: v  reason: collision with root package name */
    private int f17428v;

    /* renamed from: w  reason: collision with root package name */
    private double f17429w;

    /* renamed from: x  reason: collision with root package name */
    private int f17430x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.reactnativecommunity.slider.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0213a extends TimerTask {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ AccessibilityManager f17431d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AccessibilityEvent f17432e;

        C0213a(AccessibilityManager accessibilityManager, AccessibilityEvent accessibilityEvent) {
            this.f17431d = accessibilityManager;
            this.f17432e = accessibilityEvent;
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            this.f17431d.sendAccessibilityEvent(this.f17432e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f17434d;

        b(String str) {
            this.f17434d = str;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public BitmapDrawable call() {
            Bitmap decodeStream;
            try {
                if (!this.f17434d.startsWith("http://") && !this.f17434d.startsWith("https://") && !this.f17434d.startsWith("file://") && !this.f17434d.startsWith("asset://") && !this.f17434d.startsWith("data:")) {
                    decodeStream = BitmapFactory.decodeResource(a.this.getResources(), a.this.getResources().getIdentifier(this.f17434d, "drawable", a.this.getContext().getPackageName()));
                    return new BitmapDrawable(a.this.getResources(), decodeStream);
                }
                decodeStream = BitmapFactory.decodeStream(new URL(this.f17434d).openStream());
                return new BitmapDrawable(a.this.getResources(), decodeStream);
            } catch (Exception e10) {
                e10.printStackTrace();
                return null;
            }
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f17419e = 0.0d;
        this.f17420i = 0.0d;
        this.f17421o = 0.0d;
        this.f17422p = false;
        this.f17423q = 0.0d;
        this.f17424r = 0.0d;
        this.f17427u = -9.223372036854776E18d;
        this.f17429w = 9.223372036854776E18d;
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
        if (this.f17423q == 0.0d) {
            this.f17424r = (this.f17420i - this.f17419e) / f17418y;
        }
        setMax(getTotalSteps());
        setKeyProgressIncrement(1);
        h();
        i();
        j();
    }

    private double getStepValue() {
        double d10 = this.f17423q;
        if (d10 > 0.0d) {
            return d10;
        }
        return this.f17424r;
    }

    private int getTotalSteps() {
        return (int) Math.ceil((this.f17420i - this.f17419e) / getStepValue());
    }

    private void h() {
        double max = Math.max(this.f17427u, this.f17419e);
        double d10 = this.f17419e;
        int round = (int) Math.round(((max - d10) / (this.f17420i - d10)) * getTotalSteps());
        int i10 = this.f17430x;
        if (round > i10) {
            Log.d("Invalid configuration", "upperLimit < lowerLimit; lowerLimit not set");
        } else {
            this.f17428v = Math.min(round, i10);
        }
    }

    private void i() {
        double min = Math.min(this.f17429w, this.f17420i);
        double d10 = this.f17419e;
        int round = (int) Math.round(((min - d10) / (this.f17420i - d10)) * getTotalSteps());
        if (this.f17428v > round) {
            Log.d("Invalid configuration", "upperLimit < lowerLimit; upperLimit not set");
        } else {
            this.f17430x = round;
        }
    }

    private void j() {
        double d10 = this.f17421o;
        double d11 = this.f17419e;
        setProgress((int) Math.round(((d10 - d11) / (this.f17420i - d11)) * getTotalSteps()));
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
            new Timer().schedule(new C0213a(accessibilityManager, obtain), 1000L);
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
        this.f17422p = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f17422p;
    }

    public double f(int i10) {
        if (i10 == getMax()) {
            return this.f17420i;
        }
        return (i10 * getStepValue()) + this.f17419e;
    }

    int getLowerLimit() {
        return this.f17428v;
    }

    int getUpperLimit() {
        return this.f17430x;
    }

    @Override // android.view.View
    public void onPopulateAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onPopulateAccessibilityEvent(accessibilityEvent);
        if (accessibilityEvent.getEventType() != 32768 && (accessibilityEvent.getEventType() != 4 || !isAccessibilityFocused())) {
            return;
        }
        setupAccessibility((int) this.f17421o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAccessibilityIncrements(List<String> list) {
        this.f17426t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAccessibilityUnits(String str) {
        this.f17425s = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setLowerLimit(double d10) {
        this.f17427u = d10;
        h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setMaxValue(double d10) {
        this.f17420i = d10;
        g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setMinValue(double d10) {
        this.f17419e = d10;
        g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setStep(double d10) {
        this.f17423q = d10;
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
        this.f17429w = d10;
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setValue(double d10) {
        this.f17421o = d10;
        j();
    }

    public void setupAccessibility(int i10) {
        List list;
        if (this.f17425s != null && (list = this.f17426t) != null && list.size() - 1 == ((int) this.f17420i)) {
            String str = (String) this.f17426t.get(i10);
            int length = this.f17425s.length();
            String str2 = this.f17425s;
            if (str != null && Integer.parseInt(str) == 1) {
                str2 = str2.substring(0, length - 1);
            }
            announceForAccessibility(String.format("%s %s", str, str2));
        }
    }
}
