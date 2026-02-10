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
    private static int f18287y = 128;

    /* renamed from: e  reason: collision with root package name */
    private double f18288e;

    /* renamed from: i  reason: collision with root package name */
    private double f18289i;

    /* renamed from: o  reason: collision with root package name */
    private double f18290o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f18291p;

    /* renamed from: q  reason: collision with root package name */
    private double f18292q;

    /* renamed from: r  reason: collision with root package name */
    private double f18293r;

    /* renamed from: s  reason: collision with root package name */
    private String f18294s;

    /* renamed from: t  reason: collision with root package name */
    private List f18295t;

    /* renamed from: u  reason: collision with root package name */
    private double f18296u;

    /* renamed from: v  reason: collision with root package name */
    private int f18297v;

    /* renamed from: w  reason: collision with root package name */
    private double f18298w;

    /* renamed from: x  reason: collision with root package name */
    private int f18299x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.reactnativecommunity.slider.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0213a extends TimerTask {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ AccessibilityManager f18300d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ AccessibilityEvent f18301e;

        C0213a(AccessibilityManager accessibilityManager, AccessibilityEvent accessibilityEvent) {
            this.f18300d = accessibilityManager;
            this.f18301e = accessibilityEvent;
        }

        @Override // java.util.TimerTask, java.lang.Runnable
        public void run() {
            this.f18300d.sendAccessibilityEvent(this.f18301e);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Callable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ String f18303d;

        b(String str) {
            this.f18303d = str;
        }

        @Override // java.util.concurrent.Callable
        /* renamed from: a */
        public BitmapDrawable call() {
            Bitmap decodeStream;
            try {
                if (!this.f18303d.startsWith("http://") && !this.f18303d.startsWith("https://") && !this.f18303d.startsWith("file://") && !this.f18303d.startsWith("asset://") && !this.f18303d.startsWith("data:")) {
                    decodeStream = BitmapFactory.decodeResource(a.this.getResources(), a.this.getResources().getIdentifier(this.f18303d, "drawable", a.this.getContext().getPackageName()));
                    return new BitmapDrawable(a.this.getResources(), decodeStream);
                }
                decodeStream = BitmapFactory.decodeStream(new URL(this.f18303d).openStream());
                return new BitmapDrawable(a.this.getResources(), decodeStream);
            } catch (Exception e10) {
                e10.printStackTrace();
                return null;
            }
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f18288e = 0.0d;
        this.f18289i = 0.0d;
        this.f18290o = 0.0d;
        this.f18291p = false;
        this.f18292q = 0.0d;
        this.f18293r = 0.0d;
        this.f18296u = -9.223372036854776E18d;
        this.f18298w = 9.223372036854776E18d;
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
        if (this.f18292q == 0.0d) {
            this.f18293r = (this.f18289i - this.f18288e) / f18287y;
        }
        setMax(getTotalSteps());
        setKeyProgressIncrement(1);
        h();
        i();
        j();
    }

    private double getStepValue() {
        double d10 = this.f18292q;
        if (d10 > 0.0d) {
            return d10;
        }
        return this.f18293r;
    }

    private int getTotalSteps() {
        return (int) Math.ceil((this.f18289i - this.f18288e) / getStepValue());
    }

    private void h() {
        double max = Math.max(this.f18296u, this.f18288e);
        double d10 = this.f18288e;
        int round = (int) Math.round(((max - d10) / (this.f18289i - d10)) * getTotalSteps());
        int i10 = this.f18299x;
        if (round > i10) {
            Log.d("Invalid configuration", "upperLimit < lowerLimit; lowerLimit not set");
        } else {
            this.f18297v = Math.min(round, i10);
        }
    }

    private void i() {
        double min = Math.min(this.f18298w, this.f18289i);
        double d10 = this.f18288e;
        int round = (int) Math.round(((min - d10) / (this.f18289i - d10)) * getTotalSteps());
        if (this.f18297v > round) {
            Log.d("Invalid configuration", "upperLimit < lowerLimit; upperLimit not set");
        } else {
            this.f18299x = round;
        }
    }

    private void j() {
        double d10 = this.f18290o;
        double d11 = this.f18288e;
        setProgress((int) Math.round(((d10 - d11) / (this.f18289i - d11)) * getTotalSteps()));
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
        this.f18291p = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        return this.f18291p;
    }

    public double f(int i10) {
        if (i10 == getMax()) {
            return this.f18289i;
        }
        return (i10 * getStepValue()) + this.f18288e;
    }

    int getLowerLimit() {
        return this.f18297v;
    }

    int getUpperLimit() {
        return this.f18299x;
    }

    @Override // android.view.View
    public void onPopulateAccessibilityEvent(AccessibilityEvent accessibilityEvent) {
        super.onPopulateAccessibilityEvent(accessibilityEvent);
        if (accessibilityEvent.getEventType() != 32768 && (accessibilityEvent.getEventType() != 4 || !isAccessibilityFocused())) {
            return;
        }
        setupAccessibility((int) this.f18290o);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAccessibilityIncrements(List<String> list) {
        this.f18295t = list;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setAccessibilityUnits(String str) {
        this.f18294s = str;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setLowerLimit(double d10) {
        this.f18296u = d10;
        h();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setMaxValue(double d10) {
        this.f18289i = d10;
        g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setMinValue(double d10) {
        this.f18288e = d10;
        g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setStep(double d10) {
        this.f18292q = d10;
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
        this.f18298w = d10;
        i();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setValue(double d10) {
        this.f18290o = d10;
        j();
    }

    public void setupAccessibility(int i10) {
        List list;
        if (this.f18294s != null && (list = this.f18295t) != null && list.size() - 1 == ((int) this.f18289i)) {
            String str = (String) this.f18295t.get(i10);
            int length = this.f18294s.length();
            String str2 = this.f18294s;
            if (str != null && Integer.parseInt(str) == 1) {
                str2 = str2.substring(0, length - 1);
            }
            announceForAccessibility(String.format("%s %s", str, str2));
        }
    }
}
