package i9;

import android.graphics.drawable.Animatable;
import android.util.Log;
import com.facebook.drawee.controller.ControllerListener;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements ControllerListener {

    /* renamed from: d  reason: collision with root package name */
    private final List f28289d = new ArrayList(2);

    private synchronized void c(String str, Throwable th2) {
        Log.e("FdingControllerListener", str, th2);
    }

    public synchronized void a(ControllerListener controllerListener) {
        this.f28289d.add(controllerListener);
    }

    public synchronized void b() {
        this.f28289d.clear();
    }

    @Override // com.facebook.drawee.controller.ControllerListener
    public synchronized void onFailure(String str, Throwable th2) {
        int size = this.f28289d.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ControllerListener controllerListener = (ControllerListener) this.f28289d.get(i10);
                if (controllerListener != null) {
                    controllerListener.onFailure(str, th2);
                }
            } catch (Exception e10) {
                c("InternalListener exception in onFailure", e10);
            }
        }
    }

    @Override // com.facebook.drawee.controller.ControllerListener
    public synchronized void onFinalImageSet(String str, Object obj, Animatable animatable) {
        int size = this.f28289d.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ControllerListener controllerListener = (ControllerListener) this.f28289d.get(i10);
                if (controllerListener != null) {
                    controllerListener.onFinalImageSet(str, obj, animatable);
                }
            } catch (Exception e10) {
                c("InternalListener exception in onFinalImageSet", e10);
            }
        }
    }

    @Override // com.facebook.drawee.controller.ControllerListener
    public void onIntermediateImageFailed(String str, Throwable th2) {
        int size = this.f28289d.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ControllerListener controllerListener = (ControllerListener) this.f28289d.get(i10);
                if (controllerListener != null) {
                    controllerListener.onIntermediateImageFailed(str, th2);
                }
            } catch (Exception e10) {
                c("InternalListener exception in onIntermediateImageFailed", e10);
            }
        }
    }

    @Override // com.facebook.drawee.controller.ControllerListener
    public void onIntermediateImageSet(String str, Object obj) {
        int size = this.f28289d.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ControllerListener controllerListener = (ControllerListener) this.f28289d.get(i10);
                if (controllerListener != null) {
                    controllerListener.onIntermediateImageSet(str, obj);
                }
            } catch (Exception e10) {
                c("InternalListener exception in onIntermediateImageSet", e10);
            }
        }
    }

    @Override // com.facebook.drawee.controller.ControllerListener
    public synchronized void onRelease(String str) {
        int size = this.f28289d.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ControllerListener controllerListener = (ControllerListener) this.f28289d.get(i10);
                if (controllerListener != null) {
                    controllerListener.onRelease(str);
                }
            } catch (Exception e10) {
                c("InternalListener exception in onRelease", e10);
            }
        }
    }

    @Override // com.facebook.drawee.controller.ControllerListener
    public synchronized void onSubmit(String str, Object obj) {
        int size = this.f28289d.size();
        for (int i10 = 0; i10 < size; i10++) {
            try {
                ControllerListener controllerListener = (ControllerListener) this.f28289d.get(i10);
                if (controllerListener != null) {
                    controllerListener.onSubmit(str, obj);
                }
            } catch (Exception e10) {
                c("InternalListener exception in onSubmit", e10);
            }
        }
    }
}
