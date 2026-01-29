package com.appsflyer.internal;

import androidx.recyclerview.widget.RecyclerView;
import java.io.BufferedInputStream;
import java.io.FilterInputStream;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFk1mSDK extends FilterInputStream {
    private static final short AFAdRevenueData = (short) ((Math.sqrt(5.0d) - 1.0d) * Math.pow(2.0d, 15.0d));
    private int AFInAppEventParameterName;
    private int areAllFieldsValid;
    private int component1;
    private int component2;
    private int component3;
    private int component4;
    private final int copy;
    private final int copydefault;
    private int equals;
    private byte[] getCurrencyIso4217Code;
    private byte[] getMediationNetwork;
    private byte[] getMonetizationNetwork;
    private int getRevenue;
    private int hashCode;
    private int toString;

    public AFk1mSDK(InputStream inputStream, int[] iArr, int i10, byte[] bArr, int i11, int i12) {
        this(inputStream, iArr, i10, bArr, i11, i12, (byte) 0);
    }

    private int getCurrencyIso4217Code() {
        if (this.component4 == Integer.MAX_VALUE) {
            this.component4 = ((FilterInputStream) this).in.read();
        }
        int i10 = 8;
        if (this.getRevenue == 8) {
            byte[] bArr = this.getMediationNetwork;
            int i11 = this.component4;
            bArr[0] = (byte) i11;
            if (i11 >= 0) {
                int i12 = 1;
                do {
                    int read = ((FilterInputStream) this).in.read(this.getMediationNetwork, i12, 8 - i12);
                    if (read <= 0) {
                        break;
                    }
                    i12 += read;
                } while (i12 < 8);
                if (i12 >= 8) {
                    int i13 = this.copy;
                    if (i13 == this.copydefault) {
                        getMonetizationNetwork();
                    } else {
                        if (this.AFInAppEventParameterName <= i13) {
                            getMonetizationNetwork();
                        }
                        int i14 = this.AFInAppEventParameterName;
                        if (i14 < this.copydefault) {
                            this.AFInAppEventParameterName = i14 + 1;
                        } else {
                            this.AFInAppEventParameterName = 1;
                        }
                    }
                    int read2 = ((FilterInputStream) this).in.read();
                    this.component4 = read2;
                    this.getRevenue = 0;
                    if (read2 < 0) {
                        i10 = 8 - (this.getMediationNetwork[7] & 255);
                    }
                    this.areAllFieldsValid = i10;
                } else {
                    throw new IllegalStateException("unexpected block size");
                }
            } else {
                throw new IllegalStateException("unexpected block size");
            }
        }
        return this.areAllFieldsValid;
    }

    private void getMonetizationNetwork() {
        if (this.component1 == 3) {
            byte[] bArr = this.getMediationNetwork;
            System.arraycopy(bArr, 0, this.getCurrencyIso4217Code, 0, bArr.length);
        }
        byte[] bArr2 = this.getMediationNetwork;
        char c10 = 1;
        char c11 = 2;
        int i10 = ((bArr2[0] << 24) & (-16777216)) + ((bArr2[1] << 16) & 16711680) + ((bArr2[2] << 8) & 65280) + (bArr2[3] & 255);
        int i11 = ((-16777216) & (bArr2[4] << 24)) + (16711680 & (bArr2[5] << 16)) + (65280 & (bArr2[6] << 8)) + (bArr2[7] & 255);
        int i12 = 0;
        while (true) {
            int i13 = this.component2;
            if (i12 >= i13) {
                break;
            }
            short s10 = AFAdRevenueData;
            i11 -= ((((i13 - i12) * s10) + i10) ^ ((i10 << 4) + this.toString)) ^ ((i10 >>> 5) + this.hashCode);
            i10 -= (((i11 << 4) + this.component3) ^ ((s10 * (i13 - i12)) + i11)) ^ ((i11 >>> 5) + this.equals);
            i12++;
            c11 = c11;
            c10 = c10;
        }
        byte[] bArr3 = this.getMediationNetwork;
        bArr3[0] = (byte) (i10 >> 24);
        bArr3[c10] = (byte) (i10 >> 16);
        bArr3[c11] = (byte) (i10 >> 8);
        bArr3[3] = (byte) i10;
        bArr3[4] = (byte) (i11 >> 24);
        bArr3[5] = (byte) (i11 >> 16);
        bArr3[6] = (byte) (i11 >> 8);
        bArr3[7] = (byte) i11;
        if (this.component1 == 3) {
            for (int i14 = 0; i14 < 8; i14++) {
                byte[] bArr4 = this.getMediationNetwork;
                bArr4[i14] = (byte) (bArr4[i14] ^ this.getMonetizationNetwork[i14]);
            }
            byte[] bArr5 = this.getCurrencyIso4217Code;
            System.arraycopy(bArr5, 0, this.getMonetizationNetwork, 0, bArr5.length);
        }
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int available() {
        getCurrencyIso4217Code();
        return this.areAllFieldsValid - this.getRevenue;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final boolean markSupported() {
        return false;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read() {
        getCurrencyIso4217Code();
        int i10 = this.getRevenue;
        if (i10 >= this.areAllFieldsValid) {
            return -1;
        }
        byte[] bArr = this.getMediationNetwork;
        this.getRevenue = i10 + 1;
        return bArr[i10] & 255;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final long skip(long j10) {
        long j11 = 0;
        while (j11 < j10 && read() != -1) {
            j11++;
        }
        return j11;
    }

    private AFk1mSDK(InputStream inputStream, int[] iArr, int i10, byte[] bArr, int i11, int i12, byte b10) {
        super(new BufferedInputStream(inputStream, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
        this.component4 = Integer.MAX_VALUE;
        this.AFInAppEventParameterName = 1;
        this.getMediationNetwork = new byte[8];
        this.getMonetizationNetwork = new byte[8];
        this.getCurrencyIso4217Code = new byte[8];
        this.getRevenue = 8;
        this.areAllFieldsValid = 8;
        this.component2 = Math.min(Math.max(i11, 5), 16);
        this.component1 = i12;
        if (i12 == 3) {
            System.arraycopy(bArr, 0, this.getMonetizationNetwork, 0, 8);
        }
        long j10 = (iArr[1] & 4294967295L) | ((iArr[0] & 4294967295L) << 32);
        if (i10 == 0) {
            this.component3 = (int) j10;
            long j11 = j10 >> 3;
            short s10 = AFAdRevenueData;
            this.equals = (int) ((s10 * j11) >> 32);
            this.toString = (int) (j10 >> 32);
            this.hashCode = (int) (j11 + s10);
        } else {
            int i13 = (int) j10;
            this.component3 = i13;
            this.equals = i13 * i10;
            this.toString = i10 ^ i13;
            this.hashCode = (int) (j10 >> 32);
        }
        this.copy = 100;
        this.copydefault = 100;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        int i12 = i10 + i11;
        for (int i13 = i10; i13 < i12; i13++) {
            getCurrencyIso4217Code();
            int i14 = this.getRevenue;
            if (i14 >= this.areAllFieldsValid) {
                if (i13 == i10) {
                    return -1;
                }
                return i11 - (i12 - i13);
            }
            byte[] bArr2 = this.getMediationNetwork;
            this.getRevenue = i14 + 1;
            bArr[i13] = bArr2[i14];
        }
        return i11;
    }
}
