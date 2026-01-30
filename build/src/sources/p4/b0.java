package p4;

import android.net.Uri;
import android.os.Build;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
import k4.d;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    public static final b0 f44886a = new b0();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f44887a;

        /* renamed from: b  reason: collision with root package name */
        public static final /* synthetic */ int[] f44888b;

        /* renamed from: c  reason: collision with root package name */
        public static final /* synthetic */ int[] f44889c;

        /* renamed from: d  reason: collision with root package name */
        public static final /* synthetic */ int[] f44890d;

        static {
            int[] iArr = new int[k4.x.values().length];
            try {
                iArr[k4.x.ENQUEUED.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[k4.x.RUNNING.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[k4.x.SUCCEEDED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[k4.x.FAILED.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[k4.x.BLOCKED.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[k4.x.CANCELLED.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            f44887a = iArr;
            int[] iArr2 = new int[k4.a.values().length];
            try {
                iArr2[k4.a.EXPONENTIAL.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr2[k4.a.LINEAR.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
            f44888b = iArr2;
            int[] iArr3 = new int[k4.n.values().length];
            try {
                iArr3[k4.n.NOT_REQUIRED.ordinal()] = 1;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr3[k4.n.CONNECTED.ordinal()] = 2;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr3[k4.n.UNMETERED.ordinal()] = 3;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr3[k4.n.NOT_ROAMING.ordinal()] = 4;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                iArr3[k4.n.METERED.ordinal()] = 5;
            } catch (NoSuchFieldError unused13) {
            }
            f44889c = iArr3;
            int[] iArr4 = new int[k4.r.values().length];
            try {
                iArr4[k4.r.RUN_AS_NON_EXPEDITED_WORK_REQUEST.ordinal()] = 1;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                iArr4[k4.r.DROP_WORK_REQUEST.ordinal()] = 2;
            } catch (NoSuchFieldError unused15) {
            }
            f44890d = iArr4;
        }
    }

    private b0() {
    }

    public static final int a(k4.a backoffPolicy) {
        Intrinsics.checkNotNullParameter(backoffPolicy, "backoffPolicy");
        int i10 = a.f44888b[backoffPolicy.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            throw new ir.p();
        }
        return 0;
    }

    public static final Set b(byte[] bytes) {
        ObjectInputStream objectInputStream;
        Intrinsics.checkNotNullParameter(bytes, "bytes");
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        if (bytes.length == 0) {
            return linkedHashSet;
        }
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bytes);
        try {
            try {
                objectInputStream = new ObjectInputStream(byteArrayInputStream);
            } catch (IOException e10) {
                e10.printStackTrace();
            }
            try {
                int readInt = objectInputStream.readInt();
                for (int i10 = 0; i10 < readInt; i10++) {
                    Uri uri = Uri.parse(objectInputStream.readUTF());
                    boolean readBoolean = objectInputStream.readBoolean();
                    Intrinsics.checkNotNullExpressionValue(uri, "uri");
                    linkedHashSet.add(new d.b(uri, readBoolean));
                }
                Unit unit = Unit.f33298a;
                tr.c.a(objectInputStream, null);
                Unit unit2 = Unit.f33298a;
                tr.c.a(byteArrayInputStream, null);
                return linkedHashSet;
            } finally {
            }
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                tr.c.a(byteArrayInputStream, th2);
                throw th3;
            }
        }
    }

    public static final k4.a c(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                return k4.a.LINEAR;
            }
            throw new IllegalArgumentException("Could not convert " + i10 + " to BackoffPolicy");
        }
        return k4.a.EXPONENTIAL;
    }

    public static final k4.n d(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (Build.VERSION.SDK_INT >= 30 && i10 == 5) {
                                return k4.n.TEMPORARILY_UNMETERED;
                            }
                            throw new IllegalArgumentException("Could not convert " + i10 + " to NetworkType");
                        }
                        return k4.n.METERED;
                    }
                    return k4.n.NOT_ROAMING;
                }
                return k4.n.UNMETERED;
            }
            return k4.n.CONNECTED;
        }
        return k4.n.NOT_REQUIRED;
    }

    public static final k4.r e(int i10) {
        if (i10 != 0) {
            if (i10 == 1) {
                return k4.r.DROP_WORK_REQUEST;
            }
            throw new IllegalArgumentException("Could not convert " + i10 + " to OutOfQuotaPolicy");
        }
        return k4.r.RUN_AS_NON_EXPEDITED_WORK_REQUEST;
    }

    public static final k4.x f(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 == 5) {
                                return k4.x.CANCELLED;
                            }
                            throw new IllegalArgumentException("Could not convert " + i10 + " to State");
                        }
                        return k4.x.BLOCKED;
                    }
                    return k4.x.FAILED;
                }
                return k4.x.SUCCEEDED;
            }
            return k4.x.RUNNING;
        }
        return k4.x.ENQUEUED;
    }

    public static final int g(k4.n networkType) {
        Intrinsics.checkNotNullParameter(networkType, "networkType");
        int i10 = a.f44889c[networkType.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            if (i10 == 3) {
                return 2;
            }
            if (i10 == 4) {
                return 3;
            }
            if (i10 == 5) {
                return 4;
            }
            if (Build.VERSION.SDK_INT >= 30 && networkType == k4.n.TEMPORARILY_UNMETERED) {
                return 5;
            }
            throw new IllegalArgumentException("Could not convert " + networkType + " to int");
        }
        return 0;
    }

    public static final int h(k4.r policy) {
        Intrinsics.checkNotNullParameter(policy, "policy");
        int i10 = a.f44890d[policy.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return 1;
            }
            throw new ir.p();
        }
        return 0;
    }

    public static final byte[] i(Set triggers) {
        Intrinsics.checkNotNullParameter(triggers, "triggers");
        if (triggers.isEmpty()) {
            return new byte[0];
        }
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            ObjectOutputStream objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
            objectOutputStream.writeInt(triggers.size());
            Iterator it = triggers.iterator();
            while (it.hasNext()) {
                d.b bVar = (d.b) it.next();
                objectOutputStream.writeUTF(bVar.a().toString());
                objectOutputStream.writeBoolean(bVar.b());
            }
            Unit unit = Unit.f33298a;
            tr.c.a(objectOutputStream, null);
            tr.c.a(byteArrayOutputStream, null);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            Intrinsics.checkNotNullExpressionValue(byteArray, "outputStream.toByteArray()");
            return byteArray;
        } finally {
        }
    }

    public static final int j(k4.x state) {
        Intrinsics.checkNotNullParameter(state, "state");
        switch (a.f44887a[state.ordinal()]) {
            case 1:
                return 0;
            case 2:
                return 1;
            case 3:
                return 2;
            case 4:
                return 3;
            case 5:
                return 4;
            case 6:
                return 5;
            default:
                throw new ir.p();
        }
    }
}
