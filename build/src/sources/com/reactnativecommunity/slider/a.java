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
    private static int f17398y = 128;

    /* renamed from: e  reason: collision with root package name */
    private double f17399e;

    /* renamed from: i  reason: collision with root package name */
    private double f17400i;

    /* renamed from: o  reason: collision with root package name */
    private double f17401o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f17402p;

    /* renamed from: q  reason: collision with root package name */
    private double f17403q;

    /* renamed from: r  reason: collision with root package name */
    private double f17404r;

    /* renamed from: s  reason: collision with root package name */
    private String f17405s;

    /* renamed from: t  reason: collision with root package name */
    private List f17406t;

    /* renamed from: u  reason: collision with root package name */
    private double f17407u;

    /* renamed from: v  reason: collision with root package name */
    private int f17408v;

    /* renamed from: w  reason: collision with root package name */
    private double f17409w;

    /* renamed from: x  reason: collision with root package name */
    private int f17410x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.reactnativecommunity.slider.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0205a extends TimerTask {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ AccessibilityManager f17411d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AccessibilityEvent f17412e;

        C0205a(AccessibilityManager accessibilityManager, AccessibilityEvent accessibilityEvent) {
            this.f17411d = accessibilityManager;
            this.f17412e = accessibilityEvent;
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            this.f17411d.sendAccessibilityEvent(this.f17412e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f17414d;

        b(String str) {
            this.f17414d = str;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public BitmapDrawable call() {
            Bitmap decodeStream;
            try {
                if (!this.f17414d.startsWith("http://") && !this.f17414d.startsWith("https://") && !this.f17414d.startsWith("file://") && !this.f17414d.startsWith("asset://") && !this.f17414d.startsWith("data:")) {
                    decodeStream = BitmapFactory.decodeResource(a.this.getResources(), a.this.getResources().getIdentifier(this.f17414d, "drawable", a.this.getContext().getPackageName()));
                    return new BitmapDrawable(a.this.getResources(), decodeStream);
                }
                decodeStream = BitmapFactory.decodeStream(new URL(this.f17414d).openStream());
                return new BitmapDrawable(a.this.getResources(), decodeStream);
            } catch (Exception e10) {
                e10.printStackTrace();
                return null;
            }
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f17399e = 0.0d;
        this.f17400i = 0.0d;
        this.f17401o = 0.0d;
        this.f17402p = false;
        this.f17403q = 0.0d;
        this.f17404r = 0.0d;
        this.f17407u = -9.223372036854776E18d;
        this.f17409w = 9.223372036854776E18d;
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
        if (this.f17403q == 0.0d) {
            this.f17404r = (this.f17400i - this.f17399e) / f17398y;
        }
        setMax(getTotalSteps());
        setKeyProgressIncrement(1);
        h();
        i();
        j();
    }

    private double getStepValue() {
        double d10 = this.f17403q;
        if (d10 > 0.0d) {
            return d10;
        }
        return this.f17404r;
    }

    private int getTotalSteps() {
        return (int) Math.ceil((this.f17400i - this.f17399e) / getStepValue());
    }

    private void h() {
        double max = Math.max(this.f17407u, this.f17399e);
        double d10 = this.f17399e;
        int round = (int) Math.round(((max - d10) / (this.f17400i - d10)) * getTotalSteps());
        int i10 = this.f17410x;
        if (round > i10) {
            Log.d("Invalid configuration", "upperLimit < lowerLimit; lowerLimit not set");
        } else {
            this.f17408v = Math.min(round, i10);
        }
    }

    private void i() {
        double min = Math.min(this.f17409w, this.f17400i);
        double d10 = this.f17399e;
        int round = (int) Math.round(((min - d10) / (this.f17400i - d10)) * getTotalSteps());
        if (this.f17408v > round) {
            Log.d("Invalid configuration", "upperLimit < lowerLimit; upperLimit not set");
        } else {
            this.f17410x = round;
        }
    }

    private void j() {
        double d10 = this.f17401o;
        double d11 = this.f17399e;
        setProgress((int) Math.round(((d10 - d11) / (this.f17400i - d11)) * getTotalSteps()));
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
            new Timer().schedule(new C0205a(accessibilityManager, obtain), 1000L);
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
        this.f17402p = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f17402p;
    }

    public double f(int i10) {
        if (i10 == getMax()) {
            return this.f17400i;
        }
        return (i10 * getStepValue()) + this.f17399e;
    }

    int getLowerLimit() {
        return this.f17408v;
    }

    int getUpperLimit() {
        return this.f17410x;
    }

    @Override // android.view.View
    public void onPopulateAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onPopulateAccessibilityEvent(accessibilityEvent);
        if (accessibilityEvent.getEventType() != 32768 && (accessibilityEvent.getEventType() != 4 || !isAccessibilityFocused())) {
            return;
        }
        setupAccessibility((int) this.f17401o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAccessibilityIncrements(List<String> list) {
        this.f17406t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAccessibilityUnits(String str) {
        this.f17405s = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setLowerLimit(double d10) {
        this.f17407u = d10;
        h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setMaxValue(double d10) {
        this.f17400i = d10;
        g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setMinValue(double d10) {
        this.f17399e = d10;
        g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setStep(double d10) {
        this.f17403q = d10;
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
        this.f17409w = d10;
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setValue(double d10) {
        this.f17401o = d10;
        j();
    }

    public void setupAccessibility(int i10) {
        List list;
        if (this.f17405s != null && (list = this.f17406t) != null && list.size() - 1 == ((int) this.f17400i)) {
            String str = (String) this.f17406t.get(i10);
            int length = this.f17405s.length();
            String str2 = this.f17405s;
            if (str != null && Integer.parseInt(str) == 1) {
                str2 = str2.substring(0, length - 1);
            }
            announceForAccessibility(String.format("%s %s", str, str2));
        }
    }
}
