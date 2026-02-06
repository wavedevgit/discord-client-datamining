package q;

import android.hardware.camera2.CaptureResult;
import android.os.Build;
import b0.h;
import java.nio.BufferUnderflowException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g implements a0.u {

    /* renamed from: a  reason: collision with root package name */
    private final a0.q2 f45886a;

    /* renamed from: b  reason: collision with root package name */
    private final CaptureResult f45887b;

    public g(a0.q2 q2Var, CaptureResult captureResult) {
        this.f45886a = q2Var;
        this.f45887b = captureResult;
    }

    @Override // a0.u
    public long a() {
        Long l10 = (Long) this.f45887b.get(CaptureResult.SENSOR_TIMESTAMP);
        if (l10 == null) {
            return -1L;
        }
        return l10.longValue();
    }

    @Override // a0.u
    public void b(h.b bVar) {
        super.b(bVar);
        try {
            Integer num = (Integer) this.f45887b.get(CaptureResult.JPEG_ORIENTATION);
            if (num != null) {
                bVar.m(num.intValue());
            }
        } catch (BufferUnderflowException unused) {
            x.y0.l("C2CameraCaptureResult", "Failed to get JPEG orientation.");
        }
        Long l10 = (Long) this.f45887b.get(CaptureResult.SENSOR_EXPOSURE_TIME);
        if (l10 != null) {
            bVar.f(l10.longValue());
        }
        Float f10 = (Float) this.f45887b.get(CaptureResult.LENS_APERTURE);
        if (f10 != null) {
            bVar.l(f10.floatValue());
        }
        Integer num2 = (Integer) this.f45887b.get(CaptureResult.SENSOR_SENSITIVITY);
        if (num2 != null) {
            Integer num3 = (Integer) this.f45887b.get(CaptureResult.CONTROL_POST_RAW_SENSITIVITY_BOOST);
            if (num3 != null) {
                num2 = Integer.valueOf(num2.intValue() * ((int) (num3.intValue() / 100.0f)));
            }
            bVar.k(num2.intValue());
        }
        Float f11 = (Float) this.f45887b.get(CaptureResult.LENS_FOCAL_LENGTH);
        if (f11 != null) {
            bVar.h(f11.floatValue());
        }
        Integer num4 = (Integer) this.f45887b.get(CaptureResult.CONTROL_AWB_MODE);
        if (num4 != null) {
            h.c cVar = h.c.AUTO;
            if (num4.intValue() == 0) {
                cVar = h.c.MANUAL;
            }
            bVar.n(cVar);
        }
    }

    @Override // a0.u
    public a0.q2 c() {
        return this.f45886a;
    }

    @Override // a0.u
    public a0.t d() {
        Integer num = (Integer) this.f45887b.get(CaptureResult.FLASH_STATE);
        if (num == null) {
            return a0.t.UNKNOWN;
        }
        int intValue = num.intValue();
        if (intValue != 0 && intValue != 1) {
            if (intValue != 2) {
                if (intValue != 3 && intValue != 4) {
                    x.y0.c("C2CameraCaptureResult", "Undefined flash state: " + num);
                    return a0.t.UNKNOWN;
                }
                return a0.t.FIRED;
            }
            return a0.t.READY;
        }
        return a0.t.NONE;
    }

    @Override // a0.u
    public a0.r e() {
        Integer num = (Integer) this.f45887b.get(CaptureResult.CONTROL_AWB_MODE);
        if (num == null) {
            return a0.r.UNKNOWN;
        }
        switch (num.intValue()) {
            case 0:
                return a0.r.OFF;
            case 1:
                return a0.r.AUTO;
            case 2:
                return a0.r.INCANDESCENT;
            case 3:
                return a0.r.FLUORESCENT;
            case 4:
                return a0.r.WARM_FLUORESCENT;
            case 5:
                return a0.r.DAYLIGHT;
            case 6:
                return a0.r.CLOUDY_DAYLIGHT;
            case 7:
                return a0.r.TWILIGHT;
            case 8:
                return a0.r.SHADE;
            default:
                return a0.r.UNKNOWN;
        }
    }

    @Override // a0.u
    public CaptureResult f() {
        return this.f45887b;
    }

    @Override // a0.u
    public a0.n g() {
        Integer num = (Integer) this.f45887b.get(CaptureResult.CONTROL_AE_MODE);
        if (num == null) {
            return a0.n.UNKNOWN;
        }
        int intValue = num.intValue();
        if (intValue != 0) {
            if (intValue != 1) {
                if (intValue != 2) {
                    if (intValue != 3) {
                        if (intValue != 4) {
                            if (intValue != 5) {
                                return a0.n.UNKNOWN;
                            }
                            if (Build.VERSION.SDK_INT >= 28) {
                                return a0.n.ON_EXTERNAL_FLASH;
                            }
                            return a0.n.UNKNOWN;
                        }
                        return a0.n.ON_AUTO_FLASH_REDEYE;
                    }
                    return a0.n.ON_ALWAYS_FLASH;
                }
                return a0.n.ON_AUTO_FLASH;
            }
            return a0.n.ON;
        }
        return a0.n.OFF;
    }

    @Override // a0.u
    public a0.q h() {
        Integer num = (Integer) this.f45887b.get(CaptureResult.CONTROL_AF_STATE);
        if (num == null) {
            return a0.q.UNKNOWN;
        }
        switch (num.intValue()) {
            case 0:
                return a0.q.INACTIVE;
            case 1:
            case 3:
                return a0.q.SCANNING;
            case 2:
                return a0.q.PASSIVE_FOCUSED;
            case 4:
                return a0.q.LOCKED_FOCUSED;
            case 5:
                return a0.q.LOCKED_NOT_FOCUSED;
            case 6:
                return a0.q.PASSIVE_NOT_FOCUSED;
            default:
                x.y0.c("C2CameraCaptureResult", "Undefined af state: " + num);
                return a0.q.UNKNOWN;
        }
    }

    @Override // a0.u
    public a0.s i() {
        Integer num = (Integer) this.f45887b.get(CaptureResult.CONTROL_AWB_STATE);
        if (num == null) {
            return a0.s.UNKNOWN;
        }
        int intValue = num.intValue();
        if (intValue != 0) {
            if (intValue != 1) {
                if (intValue != 2) {
                    if (intValue != 3) {
                        x.y0.c("C2CameraCaptureResult", "Undefined awb state: " + num);
                        return a0.s.UNKNOWN;
                    }
                    return a0.s.LOCKED;
                }
                return a0.s.CONVERGED;
            }
            return a0.s.METERING;
        }
        return a0.s.INACTIVE;
    }

    @Override // a0.u
    public a0.p j() {
        Integer num = (Integer) this.f45887b.get(CaptureResult.CONTROL_AF_MODE);
        if (num == null) {
            return a0.p.UNKNOWN;
        }
        int intValue = num.intValue();
        if (intValue != 0) {
            if (intValue != 1 && intValue != 2) {
                if (intValue != 3 && intValue != 4) {
                    if (intValue != 5) {
                        x.y0.c("C2CameraCaptureResult", "Undefined af mode: " + num);
                        return a0.p.UNKNOWN;
                    }
                } else {
                    return a0.p.ON_CONTINUOUS_AUTO;
                }
            } else {
                return a0.p.ON_MANUAL_AUTO;
            }
        }
        return a0.p.OFF;
    }

    @Override // a0.u
    public a0.o k() {
        Integer num = (Integer) this.f45887b.get(CaptureResult.CONTROL_AE_STATE);
        if (num == null) {
            return a0.o.UNKNOWN;
        }
        int intValue = num.intValue();
        if (intValue != 0) {
            if (intValue != 1) {
                if (intValue != 2) {
                    if (intValue != 3) {
                        if (intValue != 4) {
                            if (intValue != 5) {
                                x.y0.c("C2CameraCaptureResult", "Undefined ae state: " + num);
                                return a0.o.UNKNOWN;
                            }
                        } else {
                            return a0.o.FLASH_REQUIRED;
                        }
                    } else {
                        return a0.o.LOCKED;
                    }
                } else {
                    return a0.o.CONVERGED;
                }
            }
            return a0.o.SEARCHING;
        }
        return a0.o.INACTIVE;
    }

    public g(CaptureResult captureResult) {
        this(a0.q2.b(), captureResult);
    }
}
